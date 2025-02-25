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
          open('mailto:yo@harshsingh.me')
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
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedin}  ${data.linkedin}`,
    '',
    `${chalk.bold('Painting beautiful interfaces, building tools and')}`,
    `${chalk.bold('polished user interactions.')}`,
    '',
    `${chalk.bold('Following passion, living what I love. Enjoys')}`,
    `${chalk.bold('lifting weights, evening walks, databases, Linux,')}`,
    `${chalk.bold('Vim and other random computer things.')}`
  ].join('\n'),
  {
    margin: 1,
    float: 'left',
    padding: 1,
    borderStyle: 'single',
    borderColor: 'white'
  }
)
