import { UserCircle2 } from 'lucide-react';
import React from 'react';
import CoachRating from './coach-rating';
import CoachRow from './coach-row';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

type CoachingRatingsState = Record<string, number>;
type CoachingValuesState = Record<string, number>;

type CoachCardProps = {
  coachingRating: CoachingRatingsState;
  coachingValues: CoachingValuesState;
};

function CoachCard({ coachingRating, coachingValues }: CoachCardProps) {
  const {
    gkShotRating,
    gkHandRating,
    defTacRating,
    defTechRating,
    fitQuickRating,
    fitStrRating,
    attTacRating,
    attTechRating,
    possTacRating,
    possTechRating
  } = coachingRating;

  const {
    determination,
    discipline,
    motivating,
    fitness,
    attacking,
    defending,
    tactical,
    technical,
    mental,
    distribution,
    handling,
    shotStopping
  } = coachingValues;

  return (
    <div className='p-4 sm:p-6 md:p-8 space-y-8 rounded-[0.5rem] border bg-background shadow'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-2'>
        <Card className='hidden sm:flex items-center justify-center'>
          <CardHeader>
            <UserCircle2 color='#7c3aed' size={64} />
          </CardHeader>
          <CardContent className='pt-6'>
            <div className='grid gap-2'>
              <div className='bg-[#7c3aed] w-24 h-3 rounded-[0.2rem]'></div>
              <div className='bg-[#7c3aed] w-12 h-3 rounded-[0.2rem]'></div>
              <div className='bg-[#7c3aed] w-10 h-3 rounded-[0.2rem]'></div>
              <div className='bg-[#7c3aed] w-16 h-3 rounded-[0.2rem]'></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Goalkeeping</CardTitle>
          </CardHeader>
          <CardContent>
            <CoachRating label='Shot Stopping' value={gkShotRating} />
            <CoachRating label='Handling' value={gkHandRating} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Defending</CardTitle>
          </CardHeader>
          <CardContent>
            <CoachRating label='Tactical' value={defTacRating} />
            <CoachRating label='Technical' value={defTechRating} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Attacking</CardTitle>
          </CardHeader>
          <CardContent>
            <CoachRating label='Tactical' value={attTacRating} />
            <CoachRating label='Technical' value={attTechRating} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Possession</CardTitle>
          </CardHeader>
          <CardContent>
            <CoachRating label='Tactical' value={possTacRating} />
            <CoachRating label='Technical' value={possTechRating} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fitness</CardTitle>
          </CardHeader>
          <CardContent>
            <CoachRating label='Strength' value={fitStrRating} />
            <CoachRating label='Quickness' value={fitQuickRating} />
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <CoachRow label='Attacking' value={attacking} />
          <CoachRow label='Defending' value={defending} />
          <CoachRow label='Fitness' value={fitness} />
          <CoachRow label='Mental' value={mental} />
          <CoachRow label='Tactical' value={tactical} />
          <CoachRow label='Technical' value={technical} />
        </div>
        <div>
          <div>
            <CoachRow label='Determination' value={determination} />
            <CoachRow label='Level of Discipline' value={discipline} />
            <CoachRow label='Motivating' value={motivating} />
          </div>
          <div>
            <CoachRow label='GK Distribution' value={distribution} />
            <CoachRow label='GK Handling' value={handling} />
            <CoachRow label='GK Shot Stopping' value={shotStopping} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoachCard;
