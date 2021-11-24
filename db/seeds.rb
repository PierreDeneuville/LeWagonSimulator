# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# puts "Cleaning all buddy pairs"
# BuddyPair.delete_all

# puts "Cleaning all students"
# Student.delete_all

puts "Cleaning all exercises"
Exercise.delete_all
puts "Cleaning all daily challenges"
DailyChallenge.delete_all

puts "creating 20 daily challenges"

counter = 0
daily_challenges_array = []
20.times do
  counter += 1
  daily_challenges_array << DailyChallenge.create(position: counter)
end

puts "creating 6 exercises per daily challenge"

# Exercices pour les jours 1 à 5 - 9 essais moy
success_probability = [50, 33, 25, 25, 20, 16]

daily_challenges_array[0..4].each do |daily_challenge|
  counter = 0
  success_probability.each do |proba|
    counter += 1
    Exercise.create(position: counter,
                    success_probability: proba,
                    daily_challenge: daily_challenge)
  end
end

# Exercices pour les jours 5 à 10 - 10 essais moy
success_probability = [33, 33, 25, 25, 20, 16]
daily_challenges_array[5..9].each do |daily_challenge|
  counter = 0
  success_probability.each do |proba|
    counter += 1
    Exercise.create(position: counter,
                    success_probability: proba,
                    daily_challenge: daily_challenge)
  end
end

# Exercices pour les jours 10 à 15 - 11 essais moy
success_probability = [33, 25, 25, 25, 20, 16]
daily_challenges_array[10..14].each do |daily_challenge|
  counter = 0
  success_probability.each do |proba|
    counter += 1
    Exercise.create(position: counter,
                    success_probability: proba,
                    daily_challenge: daily_challenge)
  end
end

# Exercices pour les jours 15 à 20 - 13 essais moy
success_probability = [25, 25, 20, 20, 20, 16]
daily_challenges_array[15..19].each do |daily_challenge|
  counter = 0
  success_probability.each do |proba|
    counter += 1
    Exercise.create(position: counter,
                    success_probability: proba,
                    daily_challenge: daily_challenge)
  end
end

puts "Job complete dude, enjoy!"
