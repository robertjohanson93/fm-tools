import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  getFirstTeamPlayers,
  getTotalSalary,
  getYouthPlayers
} from '@/lib/utils';
import { PoundSterling, Users } from 'lucide-react';
import React, { useState } from 'react';
import { playerData } from '../data/playerData';
import { Overview } from './overview';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const firstTeamData = getFirstTeamPlayers(playerData);
const youthTeamData = getYouthPlayers(playerData);

function Dashboard() {
  return (
    <Tabs defaultValue='club'>
      <TabsList>
        <TabsTrigger value='club'>Club</TabsTrigger>
        <TabsTrigger value='first-team'>First Team</TabsTrigger>
        <TabsTrigger value='youth-team'>Youth Team</TabsTrigger>
      </TabsList>
      <TabsContent value='club' className='space-y-4 mt-4'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          <Card>
            <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0'>
              <CardTitle className='tracking-tight text-sm font-medium'>
                Players
              </CardTitle>
              <Users color='#7c3aed' size={24} />
            </CardHeader>
            <CardContent>
              <p className='text-2xl text-black dark:text-white font-bold'>
                {playerData.length}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0'>
              <CardTitle className='tracking-tight text-sm font-medium'>
                Budget
              </CardTitle>
              <PoundSterling color='#7c3aed' size={24} />
            </CardHeader>
            <CardContent>
              <p className='text-2xl text-black dark:text-white font-bold'>
                {`£${getTotalSalary(playerData)}`}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0'>
              <CardTitle className='tracking-tight text-sm font-medium'>
                Salary
              </CardTitle>
              <PoundSterling color='#7c3aed' size={24} />
            </CardHeader>
            <CardContent>
              <p className='text-2xl text-black dark:text-white font-bold'>
                {`£${getTotalSalary(playerData)}`}
              </p>
              <p className='text-xs text-[#16a34a]'>£7 860,30 under budget</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='p-6 flex flex-row items-center justify-between space-y-0'>
              <CardTitle className='tracking-tight text-sm font-medium'>
                Avg Salary
              </CardTitle>
              <PoundSterling color='#7c3aed' size={24} />
            </CardHeader>
            <CardContent>
              <p className='text-2xl text-black dark:text-white font-bold'>
                {`£${getTotalSalary(playerData)}`}
              </p>
              <p className='text-xs text-[#16a34a]'>£7 860,30 under budget</p>
            </CardContent>
          </Card>
        </div>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
          <Card className='col-span-4'>
            <CardHeader>
              <CardTitle>Salary overall</CardTitle>
            </CardHeader>
            <CardContent>
              <Overview />
            </CardContent>
          </Card>
          <Card className='col-span-4 lg:col-span-3 max-h-[500px] overflow-x-hidden overflow-y-scroll'>
            <CardHeader>
              <CardTitle>Club players</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Agreed Playing Time</TableHead>
                    <TableHead className='text-right'>Salary (p/w)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {playerData.map((player, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-bold'>
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
            </CardContent>
          </Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default Dashboard;
