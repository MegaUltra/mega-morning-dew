import React from 'react'
import {
    Box,
    Label,
    Input,
    Select,
    Textarea,
  } from 'theme-ui'

  <Box as='form method="post" action="https://formspree.io/xzbrnzwk" method="POST"'>
  <Label htmlFor='name'>
    Your Name </Label>
    <Input name='name' mb={3} />
  
  <Label htmlFor='email'>
    Your Email Adress </Label>
    <Input type="email" name="_replyto" mb={3} />
  
  <Label htmlFor='subject'>
    Subject </Label>
    <Input name="subject" mb={3} />
  
  <Label htmlFor='message'>
    Message </Label>
    <Textarea name='message' rows='6' mb={3} />
  
  <Button type='submit'>Send</Button>
  <Input type='reset' value='Clear' />
</Box>

