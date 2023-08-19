type CoachingValuesState = Record<string, number>;

export const calculateGkShotRating = (coachingValues: CoachingValuesState) => {
  const {
    distribution,
    handling,
    shotStopping,
    tactical,
    determination,
    discipline,
    motivating
  } = coachingValues;

  const newValue =
    distribution +
    handling +
    shotStopping * 8 +
    tactical * 3 +
    (determination + discipline + motivating * 3);

  return newValue;
};

export const calculateGkHandRating = (coachingValues: CoachingValuesState) => {
  const {
    distribution,
    handling,
    shotStopping,
    technical,
    determination,
    discipline,
    motivating
  } = coachingValues;

  const newValue =
    distribution +
    handling +
    shotStopping * 8 +
    technical * 3 +
    (determination + discipline + motivating * 3);

  return newValue;
};

export const calculateDefTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, defending, determination, discipline, motivating } =
    coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculateDefTechRating = (coachingValues: CoachingValuesState) => {
  const { tactical, determination, discipline, motivating } = coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculateAttTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, determination, discipline, motivating } = coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculateAttTechRating = (coachingValues: CoachingValuesState) => {
  const { tactical, determination, discipline, motivating } = coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculatePossTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, determination, discipline, motivating } = coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculatePossTechRating = (
  coachingValues: CoachingValuesState
) => {
  const { tactical, determination, discipline, motivating } = coachingValues;

  const newValue = tactical * 2 + (determination + discipline + motivating);

  return newValue;
};

export const calculateFitStrRating = (coachingValues: CoachingValuesState) => {
  const { fitness, determination, discipline, motivating } = coachingValues;

  const newValue = fitness * 9 + (determination + discipline + motivating) * 2;

  return newValue;
};

export const calculateFitQuickRating = (
  coachingValues: CoachingValuesState
) => {
  const { fitness, determination, discipline, motivating } = coachingValues;

  const newValue = fitness * 9 + (determination + discipline + motivating) * 2;

  return newValue;
};
