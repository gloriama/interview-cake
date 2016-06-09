var condenseMeetingTimes = function(meetings) {
  var result = [];

  if (meetings.length === 0) {
    return result;
  }

  // sort meetings by startTime, and then by endTime
  meetings.sort(function(a, b) {
    if (a.startTime !== b.startTime) {
      return a.startTime - b.startTime;
    } else {
      return a.endTime - b.endTime;
    }
  });

  // initialize result with first meeting
  var lastMeeting = {
    startTime: meetings[0].startTime,
    endTime: meetings[0].endTime
  };
  result.push(lastMeeting);

  // for each meeting starting from the 1th
    // if its start time is before/at same time as lastMeeting's endTime,
      // update lastMeeting's endTime to this endTime
    // else 
      // create new lastMeeting, with the start/end times as the current meeting
      // push lastMeeting to result
  for (var i = 1; i < meetings.length; i++) {
    var meeting = meetings[i];
    if (meeting.startTime <= lastMeeting.endTime) {
      lastMeeting.endTime = Math.max(
        lastMeeting.endTime,
        meeting.endTime
      );
    } else {
      lastMeeting = {
        startTime: meeting.startTime,
        endTime: meeting.endTime
      };
      result.push(lastMeeting);
    }
  }

  // return result
  return result;
};

console.log(condenseMeetingTimes([
  {startTime: 0,  endTime: 1},
  {startTime: 3,  endTime: 5},
  {startTime: 4,  endTime: 8},
  {startTime: 10, endTime: 12},
  {startTime: 9,  endTime: 10}
]));

console.log(condenseMeetingTimes([
  {startTime: 1, endTime: 2},
  {startTime: 2, endTime: 3}
]));

console.log(condenseMeetingTimes([
  {startTime: 1, endTime: 5},
  {startTime: 2, endTime: 3}
]));

console.log(condenseMeetingTimes([
  {startTime: 1, endTime: 10},
  {startTime: 2, endTime: 6},
  {startTime: 3, endTime: 5},
  {startTime: 7, endTime: 9}
]));