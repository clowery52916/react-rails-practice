# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
City.destroy_all




atlanta = City.create!(name: 'Atlanta' , img: 'https://unsplash.com/photos/F8mx5zBVbyA', description: "Atlanta has been dubbed everything from the 'capital of the new South' and 'the next international city' to 'the best place to do business.' It's also a great place to visit. Fueled by the prosperity of local mega companies like Coca Cola and Holiday Inn, the prestige of hosting the 1996 Summer Olympic Games and the energy of young upwardly mobile types who have migrated to the city in droves - Atlanta is on fire. And this time it's a good thing. From world-class restaurants and a myriad of cultural attractions to a hip nightlife and sporting events galore, the city is cosmopolitan in every sense of the word. But Atlanta has also managed to maintain its historic character. Stop by the Atlanta History Center or visit the Martin Luther King Jr. Historical Site, a moving tribute to an American icon. Browse through the former home of famous author Margaret Mitchell or pop into the Jimmy Carter Library and Museum for details on the life and times of the former president and his family. Whether you choose modern urban endeavors or old southern pleasures, Atlanta will not disappoint.")
london = City.create!(name: 'London', img:  'https://unsplash.com/photos/3l1sjp562qQ', description: "is the capital and most populous city of England and the United Kingdom.[7][8] Standing on the River Thames in the south east of the island of Great Britain, London has been a major settlement for two millennia." )
san_fan = City.create!(name: 'San Francisco', img:  'https://unsplash.com/photos/uYc-sDEVkV8', description: "San Francisco is home to a little bit of everything. Whether you're a first time visitor or a long-time local, San Francisco's Golden Gates welcome all. This is the place to find out about all things San Francisco.
" )
newyork = City.create!(name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdopbnR0KQN6bTR4TPTwSwmtNVErkbJyVVEvwdGbEcpaBksqdgcA', description: "New York is a state in the northeastern United States. New York was one of the original thirteen colonies that formed the United States. With an estimated 19.85 million residents in 2017, it is the fourth most populous state. " )

Post.create!(title: 'Traffic!!!!' , comment: 'Lorem ipsum dolor amet single-origin coffee bicycle rights cardigan, williamsburg flannel kinfolk semiotics typewriter next level stumptown poke. Synth chambray shoreditch disrupt squid. Umami hella poke small batch hammock health goth, pour-over stumptown vexillologist vegan venmo microdosing retro. Tumeric occupy austin meditation actually ramps seitan mumblecore.', city_id: newyork.id)
Post.create!(title: 'Peaches' , comment: 'Lorem ipsum dolor amet pug before they sold out wayfarers fixie cliche ugh single-origin coffee. Roof party cronut yuccie, cray shabby chic fixie portland godard tousled master cleanse prism flannel marfa. Chartreuse flexitarian prism chambray hell of green juice. Try-hard fixie shoreditch twee jianbing, crucifix biodiesel. Intelligentsia chillwave irony, brunch readymade af next level thundercats four dollar toast twee blog dreamcatcher 3 wolf moon gastropub.', city_id: atlanta.id)
