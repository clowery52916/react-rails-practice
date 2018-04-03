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
sanFrancisco = City.create!(name: 'San Francisco', img:  'https://images.unsplash.com/photo-1443557661966-8b4795a6f62c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=d963d3320d80448b804b4db8f1e068e7', description: "San Francisco is home to a little bit of everything. Whether you're a first time visitor or a long-time local, San Francisco's Golden Gates welcome all. This is the place to find out about all things San Francisco.")
london = City.create!(name: 'London', img:  'https://images.unsplash.com/photo-1516864351034-bf734fd2c77e?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe2dae6d05ef3f400788248c5b7cc687', description: "Shout out to Owen and SJ! 
    
    London is made up of two ancient cities which are now joined together. 
    They are: 
    
    The City of London, know simply as 'the City' which is the business and financial heart of the United Kingdom. It is also known as the Square Mile (2.59 sq km/1 sq mi). It was the original Roman settlement (ancient Londinium), making it the oldest part of London and already 1,000 years old when the Tower of London was built.
    
    And the City of Westminster, where Parliament and most of the government offices are located. Also Buckingham Palace, the official London residence of the Queen and the Royal family are located there too.
    
    Together they all make up a region known as Greater London." )
newYork = City.create!(name: 'New York', img: 'https://images.unsplash.com/photo-1518545328242-f24a5094fa75?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8aac9388542b65b6f113f2bd4d6ffb3&auto=format&fit=crop&w=1050&q=80', description: "New York City is composed of five boroughs. While Manhattan and Staten Island are islands, Brooklyn and Queens are geographically part of Long Island, and the Bronx is attached to the US mainland. The islands are linked by bridges, tunnels and ferries. Check here for helpful NYC maps and guides.

    Manhattan is roughly 13.4 miles long and about 2.3 miles wide at its widest. Except at its northern and southern tips, the borough’s avenues run roughly north and south, and streets run east and west. One-way thoroughfares are common, with traffic moving east on even-numbered streets and west on odd-numbered streets. Fifth Avenue divides the island into east and west sides (for example, locations on 57th Street west of Fifth Avenue are designated “W. 57th St.,” and east of Fifth Avenue, they’re “E. 57th St.”). As you move farther east or west from Fifth Avenue, street addresses increase, usually in increments of 100 from one block to the next. For north-south avenues, 20 blocks equals a mile, and the street numbers increase as you go uptown. Blocks can be a useful measure of distance, but keep in mind your direction: walking uptown from 1st Street to 6th Street is about a quarter of a mile, but walking the same number of blocks crosstown, from First Avenue to Sixth Avenue, is approximately a mile." )

portland = City.create!(name: 'Portland', img: 'https://images.unsplash.com/photo-1436505743955-a98c0d3eb1a8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82154e5d4efa09f5f145f640c8d56f2d&auto=format&fit=crop&w=1050&q=80', description: 'Funny hats, food trucks, obsessive baristas, urban gardening, bike lovers: Portland is practically a laboratory of all that’s hip and cool in North America right now. Soak up the vibe with a visit to the city’s legendary Saturday Market, which just launched its 36th season. The event — which actually runs both Saturdays and Sundays, in the city’s historic Chinatown area — features tons of local artisans, as well as plenty to eat (portlandsaturdaymarket.com). ')

Post.create!(title: 'Traveling in Atlanta - mom and 9 year old' , comment: 'Is Atlanta a safe city for my son & I to visit (just the 2 of us)? We’ll be staying in Marietta area & want to see the Aquarium, Lego Discovery Center, Maybe Stone Mountain, or some of the science or children’s museums. Safest & easiest way to travel to these places?
Also, Any “must do” activities or places to eat?', city_id: atlanta.id)

Post.create!(title: 'Help finding Chinese restaurant I visited a year ago?', comment: 'There was an Asian market next door and the restaurant had carts of food that circulated around the restaurant. You picked items from the carts and they added to your bill. Mostly Asian customers. Very large place.', city_id: atlanta.id)    
    
Post.create!(title: 'San Fran is awesome' , comment: "Lorem Ipsum's father was with Lee Harvey Oswald prior to Oswald's being, you
know, shot. You know, it really doesn’t matter what you write as long as you’ve
got a young, and beautiful, piece of text.", city_id: sanFrancisco.id)

Post.create!(title: 'I like the Golden Gate Bridge' , comment: 'An extremely credible source has called my office and told me that Lorem
Ipsums birth certificate is a fraud. My text is long and beautiful, as, it has
been well documented, are various other parts of my website.', city_id: sanFrancisco.id)

Post.create!(title: 'I miss London', comment: "My name is Owen or SJ, and I miss London!!! lol", city_id: london.id)
