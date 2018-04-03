class Post < ApplicationRecord
  belongs_to :city
  validates :title, presence: true, length: { in: 1..200}
  validates :comment, presence: true, length: { minimum: 20}
end
