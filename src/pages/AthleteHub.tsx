import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Camera, Video, Image, Heart, MessageCircle, Share2, Play } from "lucide-react";

interface Post {
  id: number;
  type: 'photo' | 'video' | 'edit';
  title: string;
  content: string;
  author: string;
  sport: string;
  timestamp: string;
  likes: number;
  comments: number;
  tags: string[];
}

const AthleteHub = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      type: 'video',
      title: "Game-Winning Touchdown Pass",
      content: "Fourth quarter, 2 minutes left, 40-yard touchdown pass to seal the victory! 🏈",
      author: "Mike_QB23",
      sport: "Football",
      timestamp: "2 hours ago",
      likes: 245,
      comments: 18,
      tags: ["quarterback", "touchdown", "clutch"]
    },
    {
      id: 2,
      type: 'photo',
      title: "Post-Workout Gains",
      content: "Deadlifted 405 lbs today! New PR 💪 Training for next season has been intense.",
      author: "Sarah_Hoops",
      sport: "Basketball",
      timestamp: "5 hours ago",
      likes: 189,
      comments: 12,
      tags: ["deadlift", "PR", "training"]
    },
    {
      id: 3,
      type: 'edit',
      title: "Skills Montage - Soccer Tricks",
      content: "Compiled my best moves from this season. Still working on that rainbow flick! ⚽",
      author: "Carlos_Soccer10",
      sport: "Soccer",
      timestamp: "1 day ago",
      likes: 312,
      comments: 24,
      tags: ["skills", "montage", "soccer"]
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    sport: "",
    tags: "",
    type: 'photo' as 'photo' | 'video' | 'edit'
  });

  const { toast } = useToast();

  const handleSubmitPost = () => {
    if (!newPost.title || !newPost.content || !newPost.sport) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const post: Post = {
      id: posts.length + 1,
      type: newPost.type,
      title: newPost.title,
      content: newPost.content,
      author: "You",
      sport: newPost.sport,
      timestamp: "Just now",
      likes: 0,
      comments: 0,
      tags: newPost.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };

    setPosts([post, ...posts]);
    setNewPost({ title: "", content: "", sport: "", tags: "", type: 'photo' });
    
    toast({
      title: "Post Shared!",
      description: "Your content has been shared with the athlete community."
    });
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const getPostIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-5 w-5" />;
      case 'edit': return <Play className="h-5 w-5" />;
      default: return <Image className="h-5 w-5" />;
    }
  };

  const getSportEmoji = (sport: string) => {
    const sportLower = sport.toLowerCase();
    if (sportLower.includes('basketball')) return '🏀';
    if (sportLower.includes('football')) return '🏈';
    if (sportLower.includes('soccer')) return '⚽';
    if (sportLower.includes('baseball')) return '⚾';
    if (sportLower.includes('tennis')) return '🎾';
    return '🏃‍♂️';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-subtle relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5"></div>
          <div className="container mx-auto max-w-4xl relative z-10 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Athlete <span className="bg-gradient-hero bg-clip-text text-transparent">Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Share your athletic journey - photos, videos, training highlights, and skill edits with the sports community
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="feed" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="feed">Community Feed</TabsTrigger>
                <TabsTrigger value="share">Share Content</TabsTrigger>
              </TabsList>

              <TabsContent value="feed" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <Card key={post.id} className="shadow-elegant hover:shadow-glow transition-all duration-300 bg-gradient-card border border-border/50">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            {getPostIcon(post.type)}
                            <Badge variant="secondary" className="text-xs">
                              {post.type.toUpperCase()}
                            </Badge>
                          </div>
                          <span className="text-2xl">{getSportEmoji(post.sport)}</span>
                        </div>
                        <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                        <CardDescription className="text-sm">
                          By <span className="font-medium">{post.author}</span> • {post.timestamp}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
                        
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              #{tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-border/30">
                          <div className="flex items-center space-x-4">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => handleLike(post.id)}
                              className="text-muted-foreground hover:text-primary"
                            >
                              <Heart className="h-4 w-4 mr-1" />
                              {post.likes}
                            </Button>
                            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {post.comments}
                            </Button>
                          </div>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="share" className="space-y-6">
                <Card className="shadow-elegant bg-gradient-card border border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl">Share Your Athletic Journey</CardTitle>
                    <CardDescription>
                      Post photos, videos, training highlights, or skill compilations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <Button 
                        variant={newPost.type === 'photo' ? 'default' : 'outline'}
                        onClick={() => setNewPost({...newPost, type: 'photo'})}
                        className="flex flex-col items-center space-y-2 h-auto py-4"
                      >
                        <Camera className="h-6 w-6" />
                        <span>Photo</span>
                      </Button>
                      <Button 
                        variant={newPost.type === 'video' ? 'default' : 'outline'}
                        onClick={() => setNewPost({...newPost, type: 'video'})}
                        className="flex flex-col items-center space-y-2 h-auto py-4"
                      >
                        <Video className="h-6 w-6" />
                        <span>Video</span>
                      </Button>
                      <Button 
                        variant={newPost.type === 'edit' ? 'default' : 'outline'}
                        onClick={() => setNewPost({...newPost, type: 'edit'})}
                        className="flex flex-col items-center space-y-2 h-auto py-4"
                      >
                        <Play className="h-6 w-6" />
                        <span>Edit/Montage</span>
                      </Button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Title *</label>
                        <Input
                          placeholder="Give your post a catchy title..."
                          value={newPost.title}
                          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Description *</label>
                        <Textarea
                          placeholder="Tell your story, share your achievement, or describe the content..."
                          value={newPost.content}
                          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                          rows={4}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Sport *</label>
                        <Input
                          placeholder="e.g., Basketball, Football, Soccer, Tennis..."
                          value={newPost.sport}
                          onChange={(e) => setNewPost({...newPost, sport: e.target.value})}
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium">Tags (Optional)</label>
                        <Input
                          placeholder="training, highlight, skills, workout (separate with commas)"
                          value={newPost.tags}
                          onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                        />
                      </div>

                      <Button 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        onClick={handleSubmitPost}
                      >
                        Share with Community
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AthleteHub;