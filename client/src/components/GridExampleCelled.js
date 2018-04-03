import React, { Component } from 'react';

import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const GridExampleCelled = () => (
  <Grid celled stackable>
    <Grid.Row>
      <Grid.Column computer={3}>
        <Image src='https://images.unsplash.com/photo-1443557661966-8b4795a6f62c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=d963d3320d80448b804b4db8f1e068e7' />
      </Grid.Column>
      <Grid.Column computer={13}>
        <h1>Made in Atlanta</h1>
        <Link to={`/cities/42`}>See the city.</Link>
        <p>Lorem Ispum is a choke artist. It chokes! I write the best placeholder text, and
I'm the biggest developer on the web by far... While that's mock-ups and this is
politics, are they really so different? I'm speaking with myself, number one,
because I have a very good brain and I've said a lot of things. Lorem Ispum is a
choke artist. It chokes! You’re disgusting.</p>
<p>I think my strongest asset maybe by far is my temperament. I have a
placeholding temperament. I’m the best thing that ever happened to placeholder
text. You have so many different things placeholder text has to be able to do,
and I don't believe Lorem Ipsum has the stamina.</p>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column computer={3}>
        <Image src='https://images.unsplash.com/photo-1520114878144-6123749968dd?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=909f37aaba966b60d222b212647acbaa' />
        <Link to={`/cities/2`}>London</Link>
      </Grid.Column>
      <Grid.Column computer={10}>
        <h1>See the City</h1>
        <p>You could see there was text coming out of her eyes, text coming out of her
wherever. Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's
being, you know, shot. You have so many different things placeholder text has to
be able to do, and I don't believe Lorem Ipsum has the stamina. I don't think
anybody knows it was Russia that wrote Lorem Ipsum, but I don't know, maybe it
was. It could be Russia, but it could also be China. It could also be lots of
other people. It also could be some wordsmith sitting on their bed that weights
400 pounds. Ok?</p>
      </Grid.Column>
      <Grid.Column computer={3}>
        <Image src='https://images.unsplash.com/photo-1516864351034-bf734fd2c77e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe2dae6d05ef3f400788248c5b7cc687' />
        <Link to={`/cities/3`}>San Francisco</Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCelled