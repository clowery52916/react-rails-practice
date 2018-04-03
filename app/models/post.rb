class Post < ApplicationRecord
  belongs_to :city
  @posts = Post.includes(:city).order("posts.created_at desc")
end
