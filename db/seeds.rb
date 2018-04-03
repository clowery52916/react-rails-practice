# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
City.destroy_all




atlanta = City.create!(name: 'Atlanta' , img: 'https://images.unsplash.com/photo-1517520688650-28eb9304f326?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37615fe853cdebf9eb634bf575b17c6b&auto=format&fit=crop&w=1350&q=80', description: "This city is really getting less appealing to live in due to suburbanites, gentrification, and traffic! With an estimated 2016 population of 472,522, it is the cultural and economic center of the Atlanta metropolitan area, home to 5.8 million people and the ninth-largest metropolitan area in the United States. Atlanta is the seat of Fulton County and a small portion of the city extends eastward into DeKalb County.")
boston = City.create!(name: 'Boston', img:  'https://assets3.thrillist.com/v1/image/2442752/size/tmg-facebook_social.jpg' )
austin = City.create!(name: 'Austin', img:  'https://austinot.com/wp-content/uploads/2012/06/Downtown-Austin-Texas-1024x543.jpg' )
newyork = City.create!(name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdopbnR0KQN6bTR4TPTwSwmtNVErkbJyVVEvwdGbEcpaBksqdgcA'  )

Post.create!(title: 'Traffic!!!!' , comment: 'Lorem ipsum dolor amet single-origin coffee bicycle rights cardigan, williamsburg flannel kinfolk semiotics typewriter next level stumptown poke. Synth chambray shoreditch disrupt squid. Umami hella poke small batch hammock health goth, pour-over stumptown vexillologist vegan venmo microdosing retro. Tumeric occupy austin meditation actually ramps seitan mumblecore.', city_id: atlanta.id)
Post.create!(title: 'Peaches' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', city_id: austin.id)