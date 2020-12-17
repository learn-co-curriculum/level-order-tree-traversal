class Node
  attr_accessor :value, :left, :right

  def initialize(value, left = nil, right = nil)
    @value = value
    @left = left
    @right = right
  end
end

def level_order_traversal(root)
  # type your code in here
end

if __FILE__ == $PROGRAM_NAME
  root = Node.new(1, Node.new(2), Node.new(3));

  puts "Expecting: [[1], [2, 3]]"
  puts level_order_traversal(root)

  puts

  puts "Expecting: [[10], [20, 30], [9, 22]]"
  puts level_order_traversal(root)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
