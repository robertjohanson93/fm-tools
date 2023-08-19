type CoachingValuesState = Record<string, number>;

export const calculateGkShotRating = (coachingValues: CoachingValuesState) => {
  const { shotStopping, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    shotStopping * 3 + (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateGkHandRating = (coachingValues: CoachingValuesState) => {
  const { distribution, handling, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((distribution + handling) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateDefTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, defending, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((tactical + defending) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateDefTechRating = (coachingValues: CoachingValuesState) => {
  const { technical, defending, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((technical + defending) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateAttTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, attacking, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((tactical + attacking) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateAttTechRating = (coachingValues: CoachingValuesState) => {
  const { technical, attacking, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((technical + attacking) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculatePossTacRating = (coachingValues: CoachingValuesState) => {
  const { tactical, mental, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((tactical + mental) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculatePossTechRating = (
  coachingValues: CoachingValuesState
) => {
  const { tactical, mental, determination, discipline, motivating } =
    coachingValues;

  const newValue =
    ((tactical + mental) / 2) * 3 +
    (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateFitStrRating = (coachingValues: CoachingValuesState) => {
  const { fitness, determination, discipline, motivating } = coachingValues;

  const newValue = fitness * 3 + (determination + discipline + motivating) / 2;

  return newValue;
};

export const calculateFitQuickRating = (
  coachingValues: CoachingValuesState
) => {
  const { fitness, determination, discipline, motivating } = coachingValues;

  const newValue = fitness * 3 + (determination + discipline + motivating) / 2;

  return newValue;
};
