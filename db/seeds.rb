# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
City.destroy_all




atlanta = City.create!(name: 'Atlanta' , img: 'https://www.atlantaga.gov/Home/ShowImage?id=3728&t=636339564821530000', description: "This city is fuckin tight!")
boston = City.create!(name: 'Boston', img:  'https://assets3.thrillist.com/v1/image/2442752/size/tmg-facebook_social.jpg' )
austin = City.create!(name: 'Austin', img:  'https://austinot.com/wp-content/uploads/2012/06/Downtown-Austin-Texas-1024x543.jpg' )
newyork = City.create!(name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdopbnR0KQN6bTR4TPTwSwmtNVErkbJyVVEvwdGbEcpaBksqdgcA'  )

Post.create!(title: 'Traffic!!!!' , comment: 'Lorem ipsum dolor amet single-origin coffee bicycle rights cardigan, williamsburg flannel kinfolk semiotics typewriter next level stumptown poke. Synth chambray shoreditch disrupt squid. Umami hella poke small batch hammock health goth, pour-over stumptown vexillologist vegan venmo microdosing retro. Tumeric occupy austin meditation actually ramps seitan mumblecore.', city_id: atlanta.id)
Post.create!(title: 'Peaches' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.
', city_id: austin.id)