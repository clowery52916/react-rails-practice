class City < ApplicationRecord
    has_many :posts, dependent: :destroy
    @city = City.includes(:posts).order("posts.created_at desc")
end
