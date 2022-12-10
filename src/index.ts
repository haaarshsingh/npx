#!/usr/bin/env node

import inquirer from 'inquirer'
import { me, questions } from './content.js'
import { clear } from 'console'
clear()

console.log(me)

const prompt = inquirer.createPromptModule()
prompt(questions).then((answer) => answer.action())
