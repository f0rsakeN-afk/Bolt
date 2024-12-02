import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import React from 'react'
import { Code, Eye, FolderOpenDot, Waypoints, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Builder: React.FC = () => {
    return (
        <div className="h-screen flex">
            {/* Main Content */}
            <div className="flex-1 grid grid-cols-[300px_1fr] h-full">
                {/* Steps Panel */}
                <div className="border-r relative">
                    {/* Hamburger Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="absolute top-3 left-4">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] p-0">
                            <SheetHeader className="p-4 border-b">
                                <SheetTitle className="flex items-center gap-2">
                                    <FolderOpenDot className="h-5 w-5" /> Project Files
                                </SheetTitle>
                            </SheetHeader>
                            <ScrollArea className="h-[calc(100vh-65px)]">
                                <div className="p-4 space-y-2">
                                    {Array.from({ length: 20 }).map((_, i) => (
                                        <div
                                            key={i}
                                            className="p-2 text-sm border rounded-lg hover:bg-muted transition-colors cursor-pointer"
                                        >
                                            File {i + 1}.tsx
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </SheetContent>
                    </Sheet>

                    <div className="p-4 border-b flex items-center">
                        <h3 className="flex items-center gap-2 font-semibold ml-12">
                            <Waypoints className="h-5 w-5" /> Steps
                        </h3>
                    </div>
                    <ScrollArea className="h-[calc(100vh-57px)]">
                        <div className="p-4 space-y-2">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="p-3 border rounded-lg hover:bg-muted transition-colors cursor-pointer"
                                >
                                    Step {i + 1}
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>

                {/* Code/Preview Panel */}
                <div className="h-full">
                    <Tabs defaultValue="code" className="h-full flex flex-col">
                        <div className="border-b">
                            <TabsList className="w-full justify-start h-[57px] p-4 bg-transparent">
                                <TabsTrigger value="code" className="gap-2 data-[state=active]:bg-muted">
                                    <Code className="h-4 w-4" /> Code
                                </TabsTrigger>
                                <TabsTrigger value="preview" className="gap-2 data-[state=active]:bg-muted">
                                    <Eye className="h-4 w-4" /> Preview
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="code" className="flex-1 p-4 m-0">
                            <Card className="h-full">
                                <CardContent className="p-4">
                                    <pre className="text-sm">
                                        {`function example() {\n  console.log("Hello World");\n}`}
                                    </pre>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="preview" className="flex-1 p-4 m-0">
                            <Card className="h-full">
                                <CardContent className="p-4">
                                    <div className="space-y-4">
                                        <h1 className="text-2xl font-bold">Preview</h1>
                                        <p>Your preview content goes here</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Builder;