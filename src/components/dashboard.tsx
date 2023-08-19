import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getFirstTeamPlayers, getYouthPlayers } from '@/lib/utils';
import { PoundSterling, Users } from 'lucide-react';
import React from 'react';
import { playerData } from '../data/playerData';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';

const firstTeamData = getFirstTeamPlayers(playerData);
const youthTeamData = getYouthPlayers(playerData);

function Dashboard() {
  return (
    <div className='overflow-hidden rounded-[0.5rem] border bg-background shadow'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <Tabs defaultValue='club'>
          <TabsList>
            <TabsTrigger value='club'>Club</TabsTrigger>
            <TabsTrigger value='first-team'>First Team</TabsTrigger>
            <TabsTrigger value='youth-team'>Youth Team</TabsTrigger>
          </TabsList>
          <TabsContent value='club' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Players
                  </CardTitle>
                  <Users color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    48
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Salary
                  </CardTitle>
                  <PoundSterling color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    £57 225,00
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className='w-full'>
              <Table>
                <TableCaption>Club players</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[200px]'>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Agreed Playing Time</TableHead>
                    <TableHead className='text-right'>Salary (p/w)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playerData.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-medium'>
                        {player.player}
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>{player.playingTime}</TableCell>
                      <TableCell className='text-right'>
                        {player.salary}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value='first-team' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Players
                  </CardTitle>
                  <Users color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    23
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Salary
                  </CardTitle>
                  <PoundSterling color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    £55 925,00
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className='w-full'>
              <Table>
                <TableCaption>Club players</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[200px]'>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Agreed Playing Time</TableHead>
                    <TableHead className='text-right'>Salary (p/w)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {firstTeamData.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-medium'>
                        {player.player}
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>{player.playingTime}</TableCell>
                      <TableCell className='text-right'>
                        {player.salary}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value='youth-team' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Players
                  </CardTitle>
                  <Users color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    25
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className='w-full'>
                <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='tracking-tight text-sm font-medium'>
                    Salary
                  </CardTitle>
                  <PoundSterling color='gray' size={24} />
                </CardHeader>
                <CardContent>
                  <CardDescription className='text-primary text-2xl font-bold'>
                    £1 300,00
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className='w-full'>
              <Table>
                <TableCaption>Youth team players</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[200px]'>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Agreed Playing Time</TableHead>
                    <TableHead className='text-right'>Salary (p/w)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {youthTeamData.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-medium'>
                        {player.player}
                      </TableCell>
                      <TableCell>{player.position}</TableCell>
                      <TableCell>{player.playingTime}</TableCell>
                      <TableCell className='text-right'>
                        {player.salary}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Dashboard;
