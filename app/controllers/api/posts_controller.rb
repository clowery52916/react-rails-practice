class Api::PostsController < ApplicationController
include ActionView::Helpers::DateHelper

    def index
        @cities = City.find(params[:city_id])
        @posts = @cities.posts.order(id: :desc)
        @sexy_date = time_ago_in_words(Date.today - 1)
        render json: @posts
    end

    def create
        @city = City.find(params[:city_id])
        @new_post = @city.posts.create!(post_params)
        render json: {
            post: @new_post
        }

        # redirect_to ("/cities/")
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

    def destroy
        @city = City.find(params[:city_id])
        @post = @city.posts.find(params[:id])
        @post.destroy
    end

    def update
        @city = City.find(params[:city_id])
        @post = @city.posts.find(params[:id])
        @post.update!(post_params)

        render json: {
            post: @post
        }
    end

    private

    def post_params
        params.require(:post).permit(:title, :comment, :city_id)
    end

end
