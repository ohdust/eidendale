-- For table: login_info
INSERT INTO login_info (user_name, user_password, isAdmin) 
VALUES ('admin','admin', true);

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest','guest');

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest2','guest2');


-- For table: users
INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title)
VALUES (1, 'Admin', 'Ashley', 'Marie', 'wolf.png', 'Professor');

INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title)
VALUES (2, 'Guest', 'One', 'Guest 1', 'frog.png', 'Professor');

INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title)
VALUES (3, 'Guest', 'Two', 'Guest 2', 'pizza.png', 'Professor');


-- For table: messages
INSERT INTO messages (user_id, room_id, message_body, time_sent)
VALUES (1, 1, 'Hello everybody!', '0252522');

-- For table: rooms
INSERT INTO rooms (id, room_name)
VALUES (1, 'Main Room');
