import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import Navbar from '@/components/ui/Navbar'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (prompt.trim()) {
            navigate('/builder')
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar at the top */}
            <header className="py-4 border-b">
                <Navbar />
            </header>

            {/* Main content */}
            <main className='flex-1 flex items-center justify-center p-4'>
                <Card className="w-full max-w-xl shadow-lg">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold text-center">
                            What can I help you with?
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className='flex items-center justify-center flex-col space-y-4' onSubmit={handleSubmit}>
                            <Textarea
                                value={prompt}
                                onChange={e => setPrompt(e.target.value)}
                                placeholder='Type your prompt here...'
                                className="min-h-[150px] resize-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            />
                            <Button
                                className="w-full max-w-sm transition-all hover:scale-105"
                                variant="default"
                                type='submit'
                            >
                                Generate Website Plan
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

export default Home;