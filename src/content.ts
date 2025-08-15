import boxen from 'boxen'
import chalk from 'chalk'
import open from 'open'
import { data } from './data.js'

export const questions = [
  {
    type: 'list',
    name: 'action',
    message: "What's up?",
    choices: [
      {
        name: 'Toss an email',
        value: () => {
          open('mailto:h@harshsingh.me')
          console.log('\nLooking forward to hearing from you.\n')
        }
      },
      {
        name: 'Reach out at @haaarshsingh',
        value: () => {
          open('https://x.com/haaarshsingh')
          console.log('\nLooking forward to hearing from you.\n')
        }
      },
      {
        name: 'Exit',
        value: () => console.log('Enjoy your day.\n')
      }
    ]
  }
]

export const me = boxen(
  [
    `${data.name}`,
    `${data.tagline}`,
    `${data.location}`,
    ``,
    `${data.labelWebsite}  ${data.website}`,
    `${data.labelTwitter}  ${data.twitter}`,
    `${data.labelGitHub}   ${data.github}`,
    `${data.labelLinkedin} ${data.linkedin}`,
    '',
    `${chalk.bold('Painting beautiful interfaces, building tools and')}`,
    `${chalk.bold('polished user interactions.')}`,
    '',
    `${chalk.bold('In my free time, I like to spend time outdoors,')}`,
    `${chalk.bold('work on my open source projects, and tinker around')}`,
    `${chalk.bold('with all sorts of random computer stuff.')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'left',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'white'
  }
)
