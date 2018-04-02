class Api::PostsController < ApplicationController
    def index
        @cities = City.find(params[:city_id])
        @posts = @cities.posts
        render json: @posts
    end

    def show
        @post = Post.find(params[:id])
        render json: @post
    end

end
