class User < ActiveRecord::Base
  validates :username, :presence => true
  validate :username_format
  def username_format 
    errors.add(:username,'must be max 10 characters') if
    username.length() > 10
    errors.add(:username,'must be start with a letter') if
    /^[A-Za-z]/.match(username)
  end
end
