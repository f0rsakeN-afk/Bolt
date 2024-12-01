import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import { Code, Eye, FolderOpenDot, Waypoints } from 'lucide-react'

const Builder: React.FC = () => {
    return (
        <div className="container mx-auto h-screen p-4">
            <div className="h-full grid grid-cols-2 gap-4">
                {/* Left Panel */}
                <div className="grid grid-cols-2 gap-4 h-full">
                    {/* Steps Panel */}
                    <Card className="h-full">
                        <CardContent className="p-4 h-full">
                            <h3 className=" flex items-center gap-0.5
                            font-semibold mb-4">Steps
                                <Waypoints />
                            </h3>
                            <ScrollArea className="h-[calc(100vh-140px)]">
                                <div className="pr-4">

                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div key={i} className="mb-4 p-3 border rounded-lg hover:bg-muted transition-colors">
                                            cbshcdbsd
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    {/* File Explorer Panel */}
                    <Card className="h-full">
                        <CardContent className="p-4 h-full">
                            <h3 className="font-semibold mb-4 flex items-center gap-0.5">File Explorer <FolderOpenDot /></h3>
                            <ScrollArea className="h-[calc(100vh-140px)]">
                                <div className="pr-4">

                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div key={i} className="mb-2 p-2 border rounded-lg hover:bg-muted transition-colors">
                                            File {i + 1}.tsx
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </div>


                <Card className="h-full">
                    <CardContent className="p-4 h-full">
                        <Tabs defaultValue="code" className="h-full">
                            <TabsList className="grid w-full grid-cols-2 mb-4">
                                <TabsTrigger value="code">Code <Code /></TabsTrigger>
                                <TabsTrigger value="preview">Preview<Eye /></TabsTrigger>
                            </TabsList>
                            <TabsContent value="code" className="h-[calc(100vh-180px)]">
                                <ScrollArea className="h-full border rounded-lg bg-muted p-4">

                                    <pre className="text-sm">
                                        {`function example() {\n  console.log("Hello World");\n}`}
                                    </pre>
                                </ScrollArea>
                            </TabsContent>
                            <TabsContent value="preview" className="h-[calc(100vh-180px)]">
                                <ScrollArea className="h-full border rounded-lg p-4">
                                    <div className="space-y-4">
                                        <h1 className="text-2xl font-bold">Preview</h1>
                                        <p>Your preview content goes here</p>
                                    </div>
                                </ScrollArea>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Builder;