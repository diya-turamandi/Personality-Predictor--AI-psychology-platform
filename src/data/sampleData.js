const questions = [
  {
    id: 1,
    category: 'introversion',
    difficulty: 'easy',
    question: 'When you are feeling drained, which setting helps you recharge most?',
    options: [
      'Quiet evening at home with a book.',
      'Casual dinner with a small group of friends.',
      'A bustling party or networking event.',
      'A team meeting with several colleagues.'
    ],
    scoreMapping: {
      'Quiet evening at home with a book.': 4,
      'Casual dinner with a small group of friends.': 3,
      'A bustling party or networking event.': 1,
      'A team meeting with several colleagues.': 2
    }
  },
  {
    id: 2,
    category: 'introversion',
    difficulty: 'easy',
    question: 'Do you prefer to think through your ideas before sharing them?',
    options: [
      'Yes, I usually think it through quietly first.',
      'Often, but I may speak up when I feel confident.',
      'Sometimes, depending on the situation.',
      'No, I prefer to share ideas as they come.'
    ],
    scoreMapping: {
      'Yes, I usually think it through quietly first.': 4,
      'Often, but I may speak up when I feel confident.': 3,
      'Sometimes, depending on the situation.': 2,
      'No, I prefer to share ideas as they come.': 1
    }
  },
  {
    id: 3,
    category: 'introversion',
    difficulty: 'easy',
    question: 'Which part of a conference do you enjoy least?',
    options: [
      'Meeting lots of new people.',
      'Listening to a keynote speech.',
      'Walking between sessions.',
      'Taking notes quietly.'
    ],
    scoreMapping: {
      'Meeting lots of new people.': 4,
      'Listening to a keynote speech.': 2,
      'Walking between sessions.': 1,
      'Taking notes quietly.': 3
    }
  },
  {
    id: 4,
    category: 'introversion',
    difficulty: 'easy',
    question: 'How would you describe your preferred social circle?',
    options: [
      'A small, close-knit group.',
      'A mix of close friends and acquaintances.',
      'A large, active network.',
      'I prefer being alone most of the time.'
    ],
    scoreMapping: {
      'A small, close-knit group.': 3,
      'A mix of close friends and acquaintances.': 2,
      'A large, active network.': 1,
      'I prefer being alone most of the time.': 4
    }
  },
  {
    id: 5,
    category: 'introversion',
    difficulty: 'easy',
    question: 'When a meeting starts, what do you usually do first?',
    options: [
      'Listen and observe before contributing.',
      'Offer a quick idea or check-in.',
      'Jump in to drive the discussion.',
      'Ask someone else to lead the conversation.'
    ],
    scoreMapping: {
      'Listen and observe before contributing.': 4,
      'Offer a quick idea or check-in.': 3,
      'Jump in to drive the discussion.': 1,
      'Ask someone else to lead the conversation.': 2
    }
  },
  {
    id: 6,
    category: 'introversion',
    difficulty: 'medium',
    question: 'How do you feel after hosting a social gathering?',
    options: [
      'Happy but exhausted and ready for solitude.',
      'Satisfied and relaxed with others nearby.',
      'Energetic and eager for more interaction.',
      'Indifferent, it depends on the group.'
    ],
    scoreMapping: {
      'Happy but exhausted and ready for solitude.': 4,
      'Satisfied and relaxed with others nearby.': 3,
      'Energetic and eager for more interaction.': 1,
      'Indifferent, it depends on the group.': 2
    }
  },
  {
    id: 7,
    category: 'introversion',
    difficulty: 'medium',
    question: 'When working on a project, what environment do you prefer?',
    options: [
      'Quiet room with few distractions.',
      'Shared workspace with occasional chatter.',
      'Busy office with constant activity.',
      'Coffee shop background noise.'
    ],
    scoreMapping: {
      'Quiet room with few distractions.': 4,
      'Shared workspace with occasional chatter.': 3,
      'Busy office with constant activity.': 1,
      'Coffee shop background noise.': 2
    }
  },
  {
    id: 8,
    category: 'introversion',
    difficulty: 'medium',
    question: 'How do you respond after receiving a lot of feedback?',
    options: [
      'Process it quietly before responding.',
      'Acknowledge it and adapt as needed.',
      'Talk it through with others immediately.',
      'Prefer not to discuss it too much.'
    ],
    scoreMapping: {
      'Process it quietly before responding.': 4,
      'Acknowledge it and adapt as needed.': 3,
      'Talk it through with others immediately.': 1,
      'Prefer not to discuss it too much.': 2
    }
  },
  {
    id: 9,
    category: 'introversion',
    difficulty: 'medium',
    question: 'Which statement fits you best in a group project?',
    options: [
      'I do best planning and crafting ideas behind the scenes.',
      'I contribute ideas and support the group quietly.',
      'I enjoy coordinating group dynamics openly.',
      'I like to be the main voice during meetings.'
    ],
    scoreMapping: {
      'I do best planning and crafting ideas behind the scenes.': 4,
      'I contribute ideas and support the group quietly.': 3,
      'I enjoy coordinating group dynamics openly.': 2,
      'I like to be the main voice during meetings.': 1
    }
  },
  {
    id: 10,
    category: 'introversion',
    difficulty: 'medium',
    question: 'How comfortable are you with spontaneous conversations?',
    options: [
      'Not very comfortable; I prefer prepared topics.',
      'Somewhat comfortable if it is with someone familiar.',
      'Comfortable most of the time.',
      'Very comfortable and excited by them.'
    ],
    scoreMapping: {
      'Not very comfortable; I prefer prepared topics.': 4,
      'Somewhat comfortable if it is with someone familiar.': 3,
      'Comfortable most of the time.': 2,
      'Very comfortable and excited by them.': 1
    }
  },
  {
    id: 11,
    category: 'introversion',
    difficulty: 'hard',
    question: 'What is your ideal way to close a busy day?',
    options: [
      'Alone with a quiet activity and no screens.',
      'A call with one close friend or family member.',
      'A group hangout or event.',
      'Catching up on emails and group chats.'
    ],
    scoreMapping: {
      'Alone with a quiet activity and no screens.': 4,
      'A call with one close friend or family member.': 3,
      'A group hangout or event.': 1,
      'Catching up on emails and group chats.': 2
    }
  },
  {
    id: 12,
    category: 'introversion',
    difficulty: 'hard',
    question: 'When a new idea emerges, how do you share it?',
    options: [
      'I write it down and review it alone first.',
      'I mention it to a trusted colleague quietly.',
      'I bring it up in a group to get immediate feedback.',
      'I present it enthusiastically to everyone.'
    ],
    scoreMapping: {
      'I write it down and review it alone first.': 4,
      'I mention it to a trusted colleague quietly.': 3,
      'I bring it up in a group to get immediate feedback.': 2,
      'I present it enthusiastically to everyone.': 1
    }
  },
  {
    id: 13,
    category: 'introversion',
    difficulty: 'hard',
    question: 'What is your preference when collaborating on a tight deadline?',
    options: [
      'Work independently and share updates later.',
      'Coordinate with one or two teammates quietly.',
      'Hold frequent open check-ins with the team.',
      'Lead rapid group brainstorming sessions.'
    ],
    scoreMapping: {
      'Work independently and share updates later.': 4,
      'Coordinate with one or two teammates quietly.': 3,
      'Hold frequent open check-ins with the team.': 2,
      'Lead rapid group brainstorming sessions.': 1
    }
  },
  {
    id: 14,
    category: 'introversion',
    difficulty: 'hard',
    question: 'Which situation feels most draining over time?',
    options: [
      'Repeated social events with many people.',
      'Occasional meetings with colleagues.',
      'Long solo work without breaks.',
      'Working through a difficult problem alone.'
    ],
    scoreMapping: {
      'Repeated social events with many people.': 4,
      'Occasional meetings with colleagues.': 2,
      'Long solo work without breaks.': 1,
      'Working through a difficult problem alone.': 3
    }
  },
  {
    id: 15,
    category: 'introversion',
    difficulty: 'hard',
    question: 'How often do you seek out quiet reflection before decisions?',
    options: [
      'Almost always before taking action.',
      'Often, especially for important choices.',
      'Sometimes, when I feel uncertain.',
      'Rarely; I decide quickly and move on.'
    ],
    scoreMapping: {
      'Almost always before taking action.': 4,
      'Often, especially for important choices.': 3,
      'Sometimes, when I feel uncertain.': 2,
      'Rarely; I decide quickly and move on.': 1
    }
  },
  {
    id: 16,
    category: 'extroversion',
    difficulty: 'easy',
    question: 'How do you feel in a crowded social room?',
    options: [
      'Invigorated and energized.',
      'Comfortable for a while.',
      'Tolerant if I know some people.',
      'Overwhelmed quickly.'
    ],
    scoreMapping: {
      'Invigorated and energized.': 4,
      'Comfortable for a while.': 3,
      'Tolerant if I know some people.': 2,
      'Overwhelmed quickly.': 1
    }
  },
  {
    id: 17,
    category: 'extroversion',
    difficulty: 'easy',
    question: 'Which is most likely when you enter a room full of strangers?',
    options: [
      'Start a conversation with someone new right away.',
      'Wait for an introduction and then engage.',
      'Find a quiet corner first.',
      'Leave if it feels too loud.'
    ],
    scoreMapping: {
      'Start a conversation with someone new right away.': 4,
      'Wait for an introduction and then engage.': 3,
      'Find a quiet corner first.': 1,
      'Leave if it feels too loud.': 2
    }
  },
  {
    id: 18,
    category: 'extroversion',
    difficulty: 'easy',
    question: 'What do you enjoy most about team events?',
    options: [
      'The energy and spontaneous interactions.',
      'Catching up with a few colleagues.',
      'Watching from the sidelines.',
      'Taking breaks away from the crowd.'
    ],
    scoreMapping: {
      'The energy and spontaneous interactions.': 4,
      'Catching up with a few colleagues.': 3,
      'Watching from the sidelines.': 1,
      'Taking breaks away from the crowd.': 2
    }
  },
  {
    id: 19,
    category: 'extroversion',
    difficulty: 'easy',
    question: 'How do you usually initiate conversations?',
    options: [
      'With enthusiasm and humor.',
      'With a friendly comment or question.',
      'After someone else starts talking.',
      'I rarely start conversations.'
    ],
    scoreMapping: {
      'With enthusiasm and humor.': 4,
      'With a friendly comment or question.': 3,
      'After someone else starts talking.': 2,
      'I rarely start conversations.': 1
    }
  },
  {
    id: 20,
    category: 'extroversion',
    difficulty: 'easy',
    question: 'Which environment helps you think most clearly?',
    options: [
      'A busy collaborative workspace.',
      'A quiet office with occasional chatter.',
      'A small meeting with peers.',
      'A silent room alone.'
    ],
    scoreMapping: {
      'A busy collaborative workspace.': 4,
      'A quiet office with occasional chatter.': 3,
      'A small meeting with peers.': 2,
      'A silent room alone.': 1
    }
  },
  {
    id: 21,
    category: 'extroversion',
    difficulty: 'medium',
    question: 'How do you handle a day with many meetings?',
    options: [
      'I feel energized by the interaction.',
      'It is manageable and productive.',
      'I need short breaks to recover.',
      'It wears me out quickly.'
    ],
    scoreMapping: {
      'I feel energized by the interaction.': 4,
      'It is manageable and productive.': 3,
      'I need short breaks to recover.': 2,
      'It wears me out quickly.': 1
    }
  },
  {
    id: 22,
    category: 'extroversion',
    difficulty: 'medium',
    question: 'What is your approach to networking?',
    options: [
      'Seek many connections and new conversations.',
      'Enjoy building a few strong relationships.',
      'Prefer connecting online or later.',
      'Avoid networking when possible.'
    ],
    scoreMapping: {
      'Seek many connections and new conversations.': 4,
      'Enjoy building a few strong relationships.': 3,
      'Prefer connecting online or later.': 2,
      'Avoid networking when possible.': 1
    }
  },
  {
    id: 23,
    category: 'extroversion',
    difficulty: 'medium',
    question: 'How do you feel when asked to present ideas to a group?',
    options: [
      'Excited and confident.',
      'Prepared but slightly nervous.',
      'A bit anxious but willing.',
      'Uncomfortable and reluctant.'
    ],
    scoreMapping: {
      'Excited and confident.': 4,
      'Prepared but slightly nervous.': 3,
      'A bit anxious but willing.': 2,
      'Uncomfortable and reluctant.': 1
    }
  },
  {
    id: 24,
    category: 'extroversion',
    difficulty: 'medium',
    question: 'Which best describes your ideal brainstorming session?',
    options: [
      'Fast-paced with many voices and ideas.',
      'Structured with guided participation.',
      'Small group with focused discussion.',
      'One-on-one conversation only.'
    ],
    scoreMapping: {
      'Fast-paced with many voices and ideas.': 4,
      'Structured with guided participation.': 3,
      'Small group with focused discussion.': 2,
      'One-on-one conversation only.': 1
    }
  },
  {
    id: 25,
    category: 'extroversion',
    difficulty: 'medium',
    question: 'What do you do when someone interrupts you?',
    options: [
      'Keep talking and stay engaged.',
      'Pause and then continue calmly.',
      'Let them speak first if needed.',
      'Lose interest and withdraw.'
    ],
    scoreMapping: {
      'Keep talking and stay engaged.': 4,
      'Pause and then continue calmly.': 3,
      'Let them speak first if needed.': 2,
      'Lose interest and withdraw.': 1
    }
  },
  {
    id: 26,
    category: 'extroversion',
    difficulty: 'hard',
    question: 'How do you rebuild energy after an intense group day?',
    options: [
      'Do more social activity with close friends.',
      'Spend time in a lively but calm setting.',
      'Enjoy quiet reflection for a little while.',
      'Prefer complete solitude immediately.'
    ],
    scoreMapping: {
      'Do more social activity with close friends.': 4,
      'Spend time in a lively but calm setting.': 3,
      'Enjoy quiet reflection for a little while.': 2,
      'Prefer complete solitude immediately.': 1
    }
  },
  {
    id: 27,
    category: 'extroversion',
    difficulty: 'hard',
    question: 'How do you react when your schedule suddenly frees up?',
    options: [
      'Call people and make plans quickly.',
      'Enjoy a mix of social and personal time.',
      'Relish the chance to relax alone.',
      'Feel uncertain about what to do.'
    ],
    scoreMapping: {
      'Call people and make plans quickly.': 4,
      'Enjoy a mix of social and personal time.': 3,
      'Relish the chance to relax alone.': 2,
      'Feel uncertain about what to do.': 1
    }
  },
  {
    id: 28,
    category: 'extroversion',
    difficulty: 'hard',
    question: 'What best describes your presence in groups?',
    options: [
      'I often lead conversation and energy.',
      'I contribute actively and encourage others.',
      'I listen and jump in when helpful.',
      'I mostly follow what others decide.'
    ],
    scoreMapping: {
      'I often lead conversation and energy.': 4,
      'I contribute actively and encourage others.': 3,
      'I listen and jump in when helpful.': 2,
      'I mostly follow what others decide.': 1
    }
  },
  {
    id: 29,
    category: 'extroversion',
    difficulty: 'hard',
    question: 'When a room is quiet, what do you usually do?',
    options: [
      'Fill the silence with a new topic.',
      'Ask a question to keep people engaged.',
      'Wait for someone else to speak first.',
      'Enjoy the calm and stay quiet.'
    ],
    scoreMapping: {
      'Fill the silence with a new topic.': 4,
      'Ask a question to keep people engaged.': 3,
      'Wait for someone else to speak first.': 2,
      'Enjoy the calm and stay quiet.': 1
    }
  },
  {
    id: 30,
    category: 'extroversion',
    difficulty: 'hard',
    question: 'What do you do when you want to make an impression?',
    options: [
      'Use energy and enthusiasm to stand out.',
      'Share a strong story or idea.',
      'Let my work speak for itself.',
      'Avoid drawing too much attention.'
    ],
    scoreMapping: {
      'Use energy and enthusiasm to stand out.': 4,
      'Share a strong story or idea.': 3,
      'Let my work speak for itself.': 2,
      'Avoid drawing too much attention.': 1
    }
  },
  {
    id: 31,
    category: 'leadership',
    difficulty: 'easy',
    question: 'When a challenge arises, how do you respond?',
    options: [
      'Take charge and set a direction.',
      'Offer support to the person leading.',
      'Follow the best available plan.',
      'Wait for clearer instructions.'
    ],
    scoreMapping: {
      'Take charge and set a direction.': 4,
      'Offer support to the person leading.': 3,
      'Follow the best available plan.': 2,
      'Wait for clearer instructions.': 1
    }
  },
  {
    id: 32,
    category: 'leadership',
    difficulty: 'easy',
    question: 'What best describes your decision style?',
    options: [
      'Decisive and confident.',
      'Deliberate and consultative.',
      'Cautious and careful.',
      'Indecisive until I have full clarity.'
    ],
    scoreMapping: {
      'Decisive and confident.': 4,
      'Deliberate and consultative.': 3,
      'Cautious and careful.': 2,
      'Indecisive until I have full clarity.': 1
    }
  },
  {
    id: 33,
    category: 'leadership',
    difficulty: 'easy',
    question: 'How do you handle conflict in a team?',
    options: [
      'Address it directly and calmly.',
      'Listen and find common ground.',
      'Keep the peace and avoid escalation.',
      'Leave it to someone else to resolve.'
    ],
    scoreMapping: {
      'Address it directly and calmly.': 4,
      'Listen and find common ground.': 3,
      'Keep the peace and avoid escalation.': 2,
      'Leave it to someone else to resolve.': 1
    }
  },
  {
    id: 34,
    category: 'leadership',
    difficulty: 'easy',
    question: 'What is your priority when assigning work?',
    options: [
      'Match strengths with tasks for impact.',
      'Balance workload evenly across the team.',
      'Use clear guidelines and expectations.',
      'Assign based on availability only.'
    ],
    scoreMapping: {
      'Match strengths with tasks for impact.': 4,
      'Balance workload evenly across the team.': 3,
      'Use clear guidelines and expectations.': 2,
      'Assign based on availability only.': 1
    }
  },
  {
    id: 35,
    category: 'leadership',
    difficulty: 'easy',
    question: 'How do you share vision with your team?',
    options: [
      'Inspire them with purpose and direction.',
      'Explain goals and align on priorities.',
      'Provide facts and let them decide.',
      'Keep it simple and let work speak.'
    ],
    scoreMapping: {
      'Inspire them with purpose and direction.': 4,
      'Explain goals and align on priorities.': 3,
      'Provide facts and let them decide.': 2,
      'Keep it simple and let work speak.': 1
    }
  },
  {
    id: 36,
    category: 'leadership',
    difficulty: 'medium',
    question: 'How do you react when a team member fails?',
    options: [
      'Coach them and learn from the mistake.',
      'Give constructive feedback and support.',
      'Document what went wrong and move on.',
      'Focus on finding someone else to finish it.'
    ],
    scoreMapping: {
      'Coach them and learn from the mistake.': 4,
      'Give constructive feedback and support.': 3,
      'Document what went wrong and move on.': 2,
      'Focus on finding someone else to finish it.': 1
    }
  },
  {
    id: 37,
    category: 'leadership',
    difficulty: 'medium',
    question: 'What is your approach to motivating the team?',
    options: [
      'Share a compelling mission and celebrate wins.',
      'Set clear milestones and offer rewards.',
      'Keep expectations steady and reliable.',
      'Let team members motivate themselves.'
    ],
    scoreMapping: {
      'Share a compelling mission and celebrate wins.': 4,
      'Set clear milestones and offer rewards.': 3,
      'Keep expectations steady and reliable.': 2,
      'Let team members motivate themselves.': 1
    }
  },
  {
    id: 38,
    category: 'leadership',
    difficulty: 'medium',
    question: 'How do you make tough calls under pressure?',
    options: [
      'Take responsibility quickly and act.',
      'Gather input and then decide.',
      'Delay until more data arrives.',
      'Follow what others recommend.'
    ],
    scoreMapping: {
      'Take responsibility quickly and act.': 4,
      'Gather input and then decide.': 3,
      'Delay until more data arrives.': 2,
      'Follow what others recommend.': 1
    }
  },
  {
    id: 39,
    category: 'leadership',
    difficulty: 'medium',
    question: 'How do you handle high-performing team members?',
    options: [
      'Challenge and empower them further.',
      'Recognize their results and support growth.',
      'Keep their work steady and stable.',
      'Avoid giving them too much responsibility.'
    ],
    scoreMapping: {
      'Challenge and empower them further.': 4,
      'Recognize their results and support growth.': 3,
      'Keep their work steady and stable.': 2,
      'Avoid giving them too much responsibility.': 1
    }
  },
  {
    id: 40,
    category: 'leadership',
    difficulty: 'medium',
    question: 'What is your stance on delegation?',
    options: [
      'Delegate with trust and clear outcomes.',
      'Delegate with regular check-ins.',
      'Handle most critical tasks yourself.',
      'Avoid delegating whenever possible.'
    ],
    scoreMapping: {
      'Delegate with trust and clear outcomes.': 4,
      'Delegate with regular check-ins.': 3,
      'Handle most critical tasks yourself.': 2,
      'Avoid delegating whenever possible.': 1
    }
  },
  {
    id: 41,
    category: 'leadership',
    difficulty: 'hard',
    question: 'How do you build resilience in your team?',
    options: [
      'Model calm confidence and learn from setbacks.',
      'Encourage adaptive thinking and flexibility.',
      'Provide resources and structured support.',
      'Limit risk and keep routines predictable.'
    ],
    scoreMapping: {
      'Model calm confidence and learn from setbacks.': 4,
      'Encourage adaptive thinking and flexibility.': 3,
      'Provide resources and structured support.': 2,
      'Limit risk and keep routines predictable.': 1
    }
  },
  {
    id: 42,
    category: 'leadership',
    difficulty: 'hard',
    question: 'What is your reaction to a team-wide failure?',
    options: [
      'Analyze, own it, and realign quickly.',
      'Support the team and refine the process.',
      'Document lessons and move on.',
      'Point to external causes and reset.'
    ],
    scoreMapping: {
      'Analyze, own it, and realign quickly.': 4,
      'Support the team and refine the process.': 3,
      'Document lessons and move on.': 2,
      'Point to external causes and reset.': 1
    }
  },
  {
    id: 43,
    category: 'leadership',
    difficulty: 'hard',
    question: 'How do you create psychological safety?',
    options: [
      'Encourage open feedback without judgment.',
      'Model vulnerability and ask questions.',
      'Provide a structured forum for ideas.',
      'Keep conversations focused on tasks only.'
    ],
    scoreMapping: {
      'Encourage open feedback without judgment.': 4,
      'Model vulnerability and ask questions.': 3,
      'Provide a structured forum for ideas.': 2,
      'Keep conversations focused on tasks only.': 1
    }
  },
  {
    id: 44,
    category: 'leadership',
    difficulty: 'hard',
    question: 'What motivates your leadership style most?',
    options: [
      'Helping others grow and win.',
      'Delivering strong results consistently.',
      'Keeping the team efficient and stable.',
      'Maintaining control and order.'
    ],
    scoreMapping: {
      'Helping others grow and win.': 4,
      'Delivering strong results consistently.': 3,
      'Keeping the team efficient and stable.': 2,
      'Maintaining control and order.': 1
    }
  },
  {
    id: 45,
    category: 'emotional balance',
    difficulty: 'easy',
    question: 'How do you feel after receiving critical feedback?',
    options: [
      'Reflect and use it to improve.',
      'Take it seriously and adapt.',
      'Feel uncomfortable but move on.',
      'Take it personally and shut down.'
    ],
    scoreMapping: {
      'Reflect and use it to improve.': 4,
      'Take it seriously and adapt.': 3,
      'Feel uncomfortable but move on.': 2,
      'Take it personally and shut down.': 1
    }
  },
  {
    id: 46,
    category: 'emotional balance',
    difficulty: 'easy',
    question: 'What do you do when a project becomes stressful?',
    options: [
      'Pause, breathe, and refocus.',
      'Work steadily through it.',
      'Ask for help when it escalates.',
      'Avoid thinking about it until necessary.'
    ],
    scoreMapping: {
      'Pause, breathe, and refocus.': 4,
      'Work steadily through it.': 3,
      'Ask for help when it escalates.': 2,
      'Avoid thinking about it until necessary.': 1
    }
  },
  {
    id: 47,
    category: 'emotional balance',
    difficulty: 'easy',
    question: 'How do you respond to unexpected setbacks?',
    options: [
      'Adapt quickly and reframe it positively.',
      'Accept it and find the next best step.',
      'Feel frustrated but continue.',
      'Get stuck on the problem.'
    ],
    scoreMapping: {
      'Adapt quickly and reframe it positively.': 4,
      'Accept it and find the next best step.': 3,
      'Feel frustrated but continue.': 2,
      'Get stuck on the problem.': 1
    }
  },
  {
    id: 48,
    category: 'emotional balance',
    difficulty: 'easy',
    question: 'Which habit helps you maintain focus?',
    options: [
      'Short breaks with mindful breathing.',
      'Checking progress frequently.',
      'Powering through without stopping.',
      'Switching tasks whenever needed.'
    ],
    scoreMapping: {
      'Short breaks with mindful breathing.': 4,
      'Checking progress frequently.': 3,
      'Powering through without stopping.': 2,
      'Switching tasks whenever needed.': 1
    }
  },
  {
    id: 49,
    category: 'emotional balance',
    difficulty: 'easy',
    question: 'How do you handle emotional tension at work?',
    options: [
      'Name it and respond calmly.',
      'Talk it out with someone trusted.',
      'Let it simmer until it passes.',
      'Ignore it and focus on tasks.'
    ],
    scoreMapping: {
      'Name it and respond calmly.': 4,
      'Talk it out with someone trusted.': 3,
      'Let it simmer until it passes.': 2,
      'Ignore it and focus on tasks.': 1
    }
  },
  {
    id: 50,
    category: 'emotional balance',
    difficulty: 'medium',
    question: 'What do you do when someone challenges your idea?',
    options: [
      'Listen, evaluate, and respond thoughtfully.',
      'Explain your reasoning clearly.',
      'Defend the idea until it is resolved.',
      'Withdraw and avoid further debate.'
    ],
    scoreMapping: {
      'Listen, evaluate, and respond thoughtfully.': 4,
      'Explain your reasoning clearly.': 3,
      'Defend the idea until it is resolved.': 2,
      'Withdraw and avoid further debate.': 1
    }
  },
  {
    id: 51,
    category: 'emotional balance',
    difficulty: 'medium',
    question: 'How often do you check in with your mood during the day?',
    options: [
      'Regularly to stay centered.',
      'Sometimes when I notice a shift.',
      'Rarely unless something happens.',
      'Almost never.'
    ],
    scoreMapping: {
      'Regularly to stay centered.': 4,
      'Sometimes when I notice a shift.': 3,
      'Rarely unless something happens.': 2,
      'Almost never.': 1
    }
  },
  {
    id: 52,
    category: 'emotional balance',
    difficulty: 'medium',
    question: 'Which phrase best fits your self-talk during stress?',
    options: [
      'I can handle this step by step.',
      'I need to stay calm and focused.',
      'This is hard, but I will try my best.',
      'I am overwhelmed and unsure.'
    ],
    scoreMapping: {
      'I can handle this step by step.': 4,
      'I need to stay calm and focused.': 3,
      'This is hard, but I will try my best.': 2,
      'I am overwhelmed and unsure.': 1
    }
  },
  {
    id: 53,
    category: 'emotional balance',
    difficulty: 'medium',
    question: 'How do you manage emotional intensity in meetings?',
    options: [
      'Stay grounded and observe reactions.',
      'Acknowledge feelings and move forward.',
      'Wait until after the meeting to process.',
      'Avoid participating if it feels tense.'
    ],
    scoreMapping: {
      'Stay grounded and observe reactions.': 4,
      'Acknowledge feelings and move forward.': 3,
      'Wait until after the meeting to process.': 2,
      'Avoid participating if it feels tense.': 1
    }
  },
  {
    id: 54,
    category: 'emotional balance',
    difficulty: 'medium',
    question: 'When someone else is upset, what do you do?',
    options: [
      'Offer calm support and listen fully.',
      'Ask how you can help them.',
      'Give them space to process.',
      'Avoid the topic to keep it neutral.'
    ],
    scoreMapping: {
      'Offer calm support and listen fully.': 4,
      'Ask how you can help them.': 3,
      'Give them space to process.': 2,
      'Avoid the topic to keep it neutral.': 1
    }
  },
  {
    id: 55,
    category: 'emotional balance',
    difficulty: 'hard',
    question: 'How do you react when your plans suddenly change?',
    options: [
      'Adjust and find the new opportunity.',
      'Take a moment, then move forward.',
      'Feel annoyed but cope.',
      'Get stuck on the disruption.'
    ],
    scoreMapping: {
      'Adjust and find the new opportunity.': 4,
      'Take a moment, then move forward.': 3,
      'Feel annoyed but cope.': 2,
      'Get stuck on the disruption.': 1
    }
  },
  {
    id: 56,
    category: 'emotional balance',
    difficulty: 'hard',
    question: 'What is your typical response to workplace pressure?',
    options: [
      'Use it to stay focused and calm.',
      'Stay motivated while monitoring stress.',
      'Feel tension but maintain control.',
      'Get anxious and rush decisions.'
    ],
    scoreMapping: {
      'Use it to stay focused and calm.': 4,
      'Stay motivated while monitoring stress.': 3,
      'Feel tension but maintain control.': 2,
      'Get anxious and rush decisions.': 1
    }
  },
  {
    id: 57,
    category: 'emotional balance',
    difficulty: 'hard',
    question: 'How do you balance empathy with boundaries?',
    options: [
      'Care deeply while protecting my limits.',
      'Support others and ask for what I need.',
      'Focus on the task and avoid over-involvement.',
      'Keep distance to stay objective.'
    ],
    scoreMapping: {
      'Care deeply while protecting my limits.': 4,
      'Support others and ask for what I need.': 3,
      'Focus on the task and avoid over-involvement.': 2,
      'Keep distance to stay objective.': 1
    }
  },
  {
    id: 58,
    category: 'emotional balance',
    difficulty: 'hard',
    question: 'Which statement fits how you recover after a hard day?',
    options: [
      'I reflect, rest, and reset calmly.',
      'I talk it through with someone close.',
      'I distract myself with low-effort activities.',
      'I struggle to let it go.'
    ],
    scoreMapping: {
      'I reflect, rest, and reset calmly.': 4,
      'I talk it through with someone close.': 3,
      'I distract myself with low-effort activities.': 2,
      'I struggle to let it go.': 1
    }
  },
  {
    id: 59,
    category: 'creativity',
    difficulty: 'easy',
    question: 'How do you approach a blank canvas or new project?',
    options: [
      'Generate many ideas quickly.',
      'Sketch out one strong concept first.',
      'Research before starting anything.',
      'Wait until inspiration arrives.'
    ],
    scoreMapping: {
      'Generate many ideas quickly.': 4,
      'Sketch out one strong concept first.': 3,
      'Research before starting anything.': 2,
      'Wait until inspiration arrives.': 1
    }
  },
  {
    id: 60,
    category: 'creativity',
    difficulty: 'easy',
    question: 'Which best describes your problem-solving style?',
    options: [
      'Try unconventional solutions freely.',
      'Combine different ideas thoughtfully.',
      'Follow proven methods carefully.',
      'Use the easiest option available.'
    ],
    scoreMapping: {
      'Try unconventional solutions freely.': 4,
      'Combine different ideas thoughtfully.': 3,
      'Follow proven methods carefully.': 2,
      'Use the easiest option available.': 1
    }
  },
  {
    id: 61,
    category: 'creativity',
    difficulty: 'easy',
    question: 'How do you feel about out-of-the-box thinking?',
    options: [
      'It is essential and exciting.',
      'Useful when the standard path stalls.',
      'Helpful but risky at times.',
      'Prefer safe, familiar solutions.'
    ],
    scoreMapping: {
      'It is essential and exciting.': 4,
      'Useful when the standard path stalls.': 3,
      'Helpful but risky at times.': 2,
      'Prefer safe, familiar solutions.': 1
    }
  },
  {
    id: 62,
    category: 'creativity',
    difficulty: 'easy',
    question: 'Which activity feels most inspiring?',
    options: [
      'Experimenting with new ideas.',
      'Mixing concepts from different fields.',
      'Refining something until it is perfect.',
      'Finishing what I already started.'
    ],
    scoreMapping: {
      'Experimenting with new ideas.': 4,
      'Mixing concepts from different fields.': 3,
      'Refining something until it is perfect.': 2,
      'Finishing what I already started.': 1
    }
  },
  {
    id: 63,
    category: 'creativity',
    difficulty: 'easy',
    question: 'How do you respond to creative constraints?',
    options: [
      'Use them as a source of innovation.',
      'Adapt and find fresh angles.',
      'Work within them carefully.',
      'Feel limited by the boundaries.'
    ],
    scoreMapping: {
      'Use them as a source of innovation.': 4,
      'Adapt and find fresh angles.': 3,
      'Work within them carefully.': 2,
      'Feel limited by the boundaries.': 1
    }
  },
  {
    id: 64,
    category: 'creativity',
    difficulty: 'medium',
    question: 'What do you do when your first idea fails?',
    options: [
      'Pivot quickly and try something new.',
      'Iterate on the idea to improve it.',
      'Analyze why it failed and do it again.',
      'Move on to a different task.'
    ],
    scoreMapping: {
      'Pivot quickly and try something new.': 4,
      'Iterate on the idea to improve it.': 3,
      'Analyze why it failed and do it again.': 2,
      'Move on to a different task.': 1
    }
  },
  {
    id: 65,
    category: 'creativity',
    difficulty: 'medium',
    question: 'Which best describes your creative workflow?',
    options: [
      'Brainstorm fast, then refine selectively.',
      'Research first, then ideate deliberately.',
      'Prototype cautiously and adjust slowly.',
      'Execute a plan without much change.'
    ],
    scoreMapping: {
      'Brainstorm fast, then refine selectively.': 4,
      'Research first, then ideate deliberately.': 3,
      'Prototype cautiously and adjust slowly.': 2,
      'Execute a plan without much change.': 1
    }
  },
  {
    id: 66,
    category: 'creativity',
    difficulty: 'medium',
    question: 'How do you gather inspiration?',
    options: [
      'From unexpected sources and mashups.',
      'From conversations and collaboration.',
      'From examples that already work well.',
      'From my own routine and habits.'
    ],
    scoreMapping: {
      'From unexpected sources and mashups.': 4,
      'From conversations and collaboration.': 3,
      'From examples that already work well.': 2,
      'From my own routine and habits.': 1
    }
  },
  {
    id: 67,
    category: 'creativity',
    difficulty: 'medium',
    question: 'What do you do with a wild concept?',
    options: [
      'Capture it and explore every angle.',
      'Test whether it has practical value.',
      'File it away for later use.',
      'Discard it if it seems too risky.'
    ],
    scoreMapping: {
      'Capture it and explore every angle.': 4,
      'Test whether it has practical value.': 3,
      'File it away for later use.': 2,
      'Discard it if it seems too risky.': 1
    }
  },
  {
    id: 68,
    category: 'creativity',
    difficulty: 'medium',
    question: 'How do you feel about playful experimentation?',
    options: [
      'It is essential to discovering new ideas.',
      'It helps when the goal is unclear.',
      'It is enjoyable but not always efficient.',
      'I prefer structured development.'
    ],
    scoreMapping: {
      'It is essential to discovering new ideas.': 4,
      'It helps when the goal is unclear.': 3,
      'It is enjoyable but not always efficient.': 2,
      'I prefer structured development.': 1
    }
  },
  {
    id: 69,
    category: 'creativity',
    difficulty: 'hard',
    question: 'How do you balance novelty with usability?',
    options: [
      'Push boundaries while keeping it understandable.',
      'Seek a fresh idea that still works well.',
      'Favor usability with a small twist.',
      'Choose the safest known solution.'
    ],
    scoreMapping: {
      'Push boundaries while keeping it understandable.': 4,
      'Seek a fresh idea that still works well.': 3,
      'Favor usability with a small twist.': 2,
      'Choose the safest known solution.': 1
    }
  },
  {
    id: 70,
    category: 'creativity',
    difficulty: 'hard',
    question: 'What is your response to creative criticism?',
    options: [
      'Use it to spark a stronger solution.',
      'Consider it and adapt carefully.',
      'Defend the core idea politely.',
      'Ignore it if it feels off.'
    ],
    scoreMapping: {
      'Use it to spark a stronger solution.': 4,
      'Consider it and adapt carefully.': 3,
      'Defend the core idea politely.': 2,
      'Ignore it if it feels off.': 1
    }
  },
  {
    id: 71,
    category: 'creativity',
    difficulty: 'hard',
    question: 'How do you approach a creative block?',
    options: [
      'Try a different perspective immediately.',
      'Step away and return with fresh eyes.',
      'Research other solutions for clues.',
      'Wait until inspiration returns.'
    ],
    scoreMapping: {
      'Try a different perspective immediately.': 4,
      'Step away and return with fresh eyes.': 3,
      'Research other solutions for clues.': 2,
      'Wait until inspiration returns.': 1
    }
  },
  {
    id: 72,
    category: 'creativity',
    difficulty: 'hard',
    question: 'Which is most important in a creative team?',
    options: [
      'Diverse perspectives and bold ideas.',
      'Clear direction and constructive feedback.',
      'Reliable execution and consistency.',
      'Harmony and low conflict.'
    ],
    scoreMapping: {
      'Diverse perspectives and bold ideas.': 4,
      'Clear direction and constructive feedback.': 3,
      'Reliable execution and consistency.': 2,
      'Harmony and low conflict.': 1
    }
  },
  {
    id: 73,
    category: 'teamwork',
    difficulty: 'easy',
    question: 'How do you prefer to split team tasks?',
    options: [
      'Based on individual strengths.',
      'Evenly so everyone contributes equally.',
      'Based on who is available.',
      'I prefer to handle most of it myself.'
    ],
    scoreMapping: {
      'Based on individual strengths.': 4,
      'Evenly so everyone contributes equally.': 3,
      'Based on who is available.': 2,
      'I prefer to handle most of it myself.': 1
    }
  },
  {
    id: 74,
    category: 'teamwork',
    difficulty: 'easy',
    question: 'What role do you usually take on in a team?',
    options: [
      'Collaborator who connects ideas.',
      'Supporter who keeps things moving.',
      'Executor who focuses on tasks.',
      'Observer who steps in when needed.'
    ],
    scoreMapping: {
      'Collaborator who connects ideas.': 4,
      'Supporter who keeps things moving.': 3,
      'Executor who focuses on tasks.': 2,
      'Observer who steps in when needed.': 1
    }
  },
  {
    id: 75,
    category: 'teamwork',
    difficulty: 'easy',
    question: 'How do you feel about team decision making?',
    options: [
      'I value collective input and alignment.',
      'I appreciate team consensus with guidance.',
      'I prefer decisions made by a few people.',
      'I like individual decision making.'
    ],
    scoreMapping: {
      'I value collective input and alignment.': 4,
      'I appreciate team consensus with guidance.': 3,
      'I prefer decisions made by a few people.': 2,
      'I like individual decision making.': 1
    }
  },
  {
    id: 76,
    category: 'teamwork',
    difficulty: 'easy',
    question: 'What do you do when teammates disagree?',
    options: [
      'Help them find common ground.',
      'Listen and summarize each view.',
      'Let them resolve it privately.',
      'Avoid getting involved.'
    ],
    scoreMapping: {
      'Help them find common ground.': 4,
      'Listen and summarize each view.': 3,
      'Let them resolve it privately.': 2,
      'Avoid getting involved.': 1
    }
  },
  {
    id: 77,
    category: 'teamwork',
    difficulty: 'easy',
    question: 'Which practice strengthens teamwork most?',
    options: [
      'Open, honest communication.',
      'Clear roles and expectations.',
      'Regular updates and check-ins.',
      'Keeping work separate to avoid conflict.'
    ],
    scoreMapping: {
      'Open, honest communication.': 4,
      'Clear roles and expectations.': 3,
      'Regular updates and check-ins.': 2,
      'Keeping work separate to avoid conflict.': 1
    }
  },
  {
    id: 78,
    category: 'teamwork',
    difficulty: 'medium',
    question: 'What is your response to a teammate\'s idea?',
    options: [
      'Build on it and add value.',
      'Offer constructive feedback.',
      'Ask for clarification first.',
      'Keep my opinion to myself.'
    ],
    scoreMapping: {
      'Build on it and add value.': 4,
      'Offer constructive feedback.': 3,
      'Ask for clarification first.': 2,
      'Keep my opinion to myself.': 1
    }
  },
  {
    id: 79,
    category: 'teamwork',
    difficulty: 'medium',
    question: 'How do you handle unequal workload in a team?',
    options: [
      'Address it with the group respectfully.',
      'Offer help to balance things.',
      'Do my share and tolerate the rest.',
      'Let others figure it out.'
    ],
    scoreMapping: {
      'Address it with the group respectfully.': 4,
      'Offer help to balance things.': 3,
      'Do my share and tolerate the rest.': 2,
      'Let others figure it out.': 1
    }
  },
  {
    id: 80,
    category: 'teamwork',
    difficulty: 'medium',
    question: 'Which approach helps a team stay aligned?',
    options: [
      'Define shared goals and revisit them often.',
      'Use clear milestones and deadlines.',
      'Keep everyone informed individually.',
      'Let each person manage their own tasks.'
    ],
    scoreMapping: {
      'Define shared goals and revisit them often.': 4,
      'Use clear milestones and deadlines.': 3,
      'Keep everyone informed individually.': 2,
      'Let each person manage their own tasks.': 1
    }
  },
  {
    id: 81,
    category: 'teamwork',
    difficulty: 'medium',
    question: 'How do you support team morale?',
    options: [
      'Acknowledge contributions and celebrate wins.',
      'Encourage everyone during tough moments.',
      'Keep a steady workflow and avoid drama.',
      'Focus on results rather than emotions.'
    ],
    scoreMapping: {
      'Acknowledge contributions and celebrate wins.': 4,
      'Encourage everyone during tough moments.': 3,
      'Keep a steady workflow and avoid drama.': 2,
      'Focus on results rather than emotions.': 1
    }
  },
  {
    id: 82,
    category: 'teamwork',
    difficulty: 'medium',
    question: 'How do you incorporate diverse viewpoints?',
    options: [
      'Actively seek and synthesize them.',
      'Listen carefully and consider options.',
      'Accept them if they seem sensible.',
      'Stick with the familiar perspective.'
    ],
    scoreMapping: {
      'Actively seek and synthesize them.': 4,
      'Listen carefully and consider options.': 3,
      'Accept them if they seem sensible.': 2,
      'Stick with the familiar perspective.': 1
    }
  },
  {
    id: 83,
    category: 'teamwork',
    difficulty: 'hard',
    question: 'What do you do when team dynamics shift suddenly?',
    options: [
      'Adapt and help the team recalibrate.',
      'Check in with key members first.',
      'Maintain my role and observe changes.',
      'Withdraw until things stabilize.'
    ],
    scoreMapping: {
      'Adapt and help the team recalibrate.': 4,
      'Check in with key members first.': 3,
      'Maintain my role and observe changes.': 2,
      'Withdraw until things stabilize.': 1
    }
  },
  {
    id: 84,
    category: 'teamwork',
    difficulty: 'hard',
    question: 'How do you resolve a persistent communication issue?',
    options: [
      'Facilitate a candid conversation to fix it.',
      'Clarify expectations and roles again.',
      'Document processes more clearly.',
      'Let the team sort it out on their own.'
    ],
    scoreMapping: {
      'Facilitate a candid conversation to fix it.': 4,
      'Clarify expectations and roles again.': 3,
      'Document processes more clearly.': 2,
      'Let the team sort it out on their own.': 1
    }
  },
  {
    id: 85,
    category: 'teamwork',
    difficulty: 'hard',
    question: 'What is your ideal team strength?',
    options: [
      'Collective intelligence and collaboration.',
      'Reliability and strong execution.',
      'Clear ownership and accountability.',
      'Minimal friction and smooth operation.'
    ],
    scoreMapping: {
      'Collective intelligence and collaboration.': 4,
      'Reliability and strong execution.': 3,
      'Clear ownership and accountability.': 2,
      'Minimal friction and smooth operation.': 1
    }
  },
  {
    id: 86,
    category: 'teamwork',
    difficulty: 'hard',
    question: 'How do you help a new team member onboard?',
    options: [
      'Connect them with people and purpose.',
      'Provide clear guidance and resources.',
      'Introduce them to the process gradually.',
      'Let them learn independently.'
    ],
    scoreMapping: {
      'Connect them with people and purpose.': 4,
      'Provide clear guidance and resources.': 3,
      'Introduce them to the process gradually.': 2,
      'Let them learn independently.': 1
    }
  },
  {
    id: 87,
    category: 'decision-making',
    difficulty: 'easy',
    question: 'Which best describes your first step in making a decision?',
    options: [
      'Gather the relevant facts quickly.',
      'Consider how it aligns with goals.',
      'Ask others for input first.',
      'Trust my gut instinct.'
    ],
    scoreMapping: {
      'Gather the relevant facts quickly.': 4,
      'Consider how it aligns with goals.': 3,
      'Ask others for input first.': 2,
      'Trust my gut instinct.': 1
    }
  },
  {
    id: 88,
    category: 'decision-making',
    difficulty: 'easy',
    question: 'How do you weigh options?',
    options: [
      'Compare the pros and cons clearly.',
      'Use a mix of logic and feeling.',
      'Ask a trusted person for advice.',
      'Go with what feels right in the moment.'
    ],
    scoreMapping: {
      'Compare the pros and cons clearly.': 4,
      'Use a mix of logic and feeling.': 3,
      'Ask a trusted person for advice.': 2,
      'Go with what feels right in the moment.': 1
    }
  },
  {
    id: 89,
    category: 'decision-making',
    difficulty: 'easy',
    question: 'What pace do you prefer for decisions?',
    options: [
      'Fast when enough information exists.',
      'Steady with thoughtful reflection.',
      'Slow when stakes are high.',
      'Immediate to avoid delay.'
    ],
    scoreMapping: {
      'Fast when enough information exists.': 4,
      'Steady with thoughtful reflection.': 3,
      'Slow when stakes are high.': 2,
      'Immediate to avoid delay.': 1
    }
  },
  {
    id: 90,
    category: 'decision-making',
    difficulty: 'easy',
    question: 'How do you handle uncertainty while choosing?',
    options: [
      'Accept it and move forward carefully.',
      'Gather more information if possible.',
      'Choose the least risky option.',
      'Put off the decision until clear.'
    ],
    scoreMapping: {
      'Accept it and move forward carefully.': 4,
      'Gather more information if possible.': 3,
      'Choose the least risky option.': 2,
      'Put off the decision until clear.': 1
    }
  },
  {
    id: 91,
    category: 'decision-making',
    difficulty: 'medium',
    question: 'What helps you avoid bias in decisions?',
    options: [
      'Look for evidence and different views.',
      'Ask someone to challenge my choice.',
      'Compare it to past experiences.',
      'Follow the most familiar path.'
    ],
    scoreMapping: {
      'Look for evidence and different views.': 4,
      'Ask someone to challenge my choice.': 3,
      'Compare it to past experiences.': 2,
      'Follow the most familiar path.': 1
    }
  },
  {
    id: 92,
    category: 'decision-making',
    difficulty: 'medium',
    question: 'Which outcome matters most to you?',
    options: [
      'A decision that balances long-term value.',
      'A choice that feels aligned and right.',
      'A result that is stable and safe.',
      'A quick result with minimal effort.'
    ],
    scoreMapping: {
      'A decision that balances long-term value.': 4,
      'A choice that feels aligned and right.': 3,
      'A result that is stable and safe.': 2,
      'A quick result with minimal effort.': 1
    }
  },
  {
    id: 93,
    category: 'decision-making',
    difficulty: 'medium',
    question: 'How do you know when to stop analyzing?',
    options: [
      'When enough data points support a clear choice.',
      'When the main options are understood well.',
      'When the deadline forces a decision.',
      'When I start feeling stuck in details.'
    ],
    scoreMapping: {
      'When enough data points support a clear choice.': 4,
      'When the main options are understood well.': 3,
      'When the deadline forces a decision.': 2,
      'When I start feeling stuck in details.': 1
    }
  },
  {
    id: 94,
    category: 'decision-making',
    difficulty: 'medium',
    question: 'When you revisit a decision, what do you check?',
    options: [
      'Whether the outcome is still aligned with goals.',
      'If the original assumptions were valid.',
      'How comfortable I feel about it now.',
      'Whether others still support it.'
    ],
    scoreMapping: {
      'Whether the outcome is still aligned with goals.': 4,
      'If the original assumptions were valid.': 3,
      'How comfortable I feel about it now.': 2,
      'Whether others still support it.': 1
    }
  },
  {
    id: 95,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'How do you handle a decision with no clear winner?',
    options: [
      'Choose the option with the strongest future benefit.',
      'Blend parts of both options if possible.',
      'Select the safer choice and monitor results.',
      'Delay until more clarity appears.'
    ],
    scoreMapping: {
      'Choose the option with the strongest future benefit.': 4,
      'Blend parts of both options if possible.': 3,
      'Select the safer choice and monitor results.': 2,
      'Delay until more clarity appears.': 1
    }
  },
  {
    id: 96,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'What do you do if a decision leads to a mistake?',
    options: [
      'Learn quickly and correct course.',
      'Evaluate what went wrong calmly.',
      'Acknowledge it and move forward.',
      'Feel regret and avoid similar risks.'
    ],
    scoreMapping: {
      'Learn quickly and correct course.': 4,
      'Evaluate what went wrong calmly.': 3,
      'Acknowledge it and move forward.': 2,
      'Feel regret and avoid similar risks.': 1
    }
  },
  {
    id: 97,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'How do you balance intuition with data?',
    options: [
      'Use intuition to guide analysis and data to validate it.',
      'Let data inform intuition and adjust as needed.',
      'Rely on one with support from the other.',
      'Trust whichever feels strongest.'
    ],
    scoreMapping: {
      'Use intuition to guide analysis and data to validate it.': 4,
      'Let data inform intuition and adjust as needed.': 3,
      'Rely on one with support from the other.': 2,
      'Trust whichever feels strongest.': 1
    }
  },
  {
    id: 98,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'What is your approach to big strategic choices?',
    options: [
      'Map impact and choose the highest value route.',
      'Consult experts and refine the options.',
      'Choose the most predictable path.',
      'Pick the choice that feels least risky.'
    ],
    scoreMapping: {
      'Map impact and choose the highest value route.': 4,
      'Consult experts and refine the options.': 3,
      'Choose the most predictable path.': 2,
      'Pick the choice that feels least risky.': 1
    }
  },
  {
    id: 99,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'How do you maintain confidence after a difficult choice?',
    options: [
      'Trust the process and learn from the outcome.',
      'Monitor progress and adjust as needed.',
      'Seek reassurance from others.',
      'Second-guess and revisit it often.'
    ],
    scoreMapping: {
      'Trust the process and learn from the outcome.': 4,
      'Monitor progress and adjust as needed.': 3,
      'Seek reassurance from others.': 2,
      'Second-guess and revisit it often.': 1
    }
  },
  {
    id: 100,
    category: 'decision-making',
    difficulty: 'hard',
    question: 'When a team disagrees with your choice, what is your move?',
    options: [
      'Discuss the reasoning and build consensus.',
      'Adjust the choice with team input.',
      'Stand firm on the decision if justified.',
      'Let them decide instead.'
    ],
    scoreMapping: {
      'Discuss the reasoning and build consensus.': 4,
      'Adjust the choice with team input.': 3,
      'Stand firm on the decision if justified.': 2,
      'Let them decide instead.': 1
    }
  }
]

export default questions
