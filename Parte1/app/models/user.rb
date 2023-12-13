class User < ActiveRecord::Base
  validates :username, :presence => true
  validate :username_format
  def username_format 
    
  end
end
