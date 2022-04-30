-- For table: login_info
INSERT INTO login_info (user_name, user_password, isAdmin) 
VALUES ('admin','admin', true);

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest','guest');

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest2','guest2');

-- For table: users
INSERT INTO users (login_id, first_name, last_name, display_name, avatar, rank, profileID, robeID)
VALUES (1, 'Admin', 'Ashley', 'Marie', 'http://eidendale.co.uk/data/avatar/felicity.png', 'Professor', 1, 1);

INSERT INTO users (login_id, first_name, last_name, display_name, avatar, rank, profileID, robeID)
VALUES (2, 'Guest', 'One', 'Guest 1', 'http://eidendale.co.uk/data/avatar/sofia.png', 'Auror', 2,1);

INSERT INTO users (login_id, first_name, last_name, display_name, avatar, rank, profileID, robeID)
VALUES (3, 'Guest', 'Gabrielle', 'St Clair', 'http://eidendale.co.uk/data/avatar/jessica.png', 'Student', 3,1);

INSERT INTO users (login_id, first_name, last_name, display_name, avatar, rank, profileID, robeID)
VALUES (4, 'Me', 'Lindsay', 'Anderson', 'http://eidendale.co.uk/data/avatar/sofia.png', 'Auror', 4,1);

-- For table: pending users
INSERT INTO pendingUsers (login_id, first_name, last_name, display_name, avatar, title, profileID, robeID)
VALUES (4, 'guest4', 'Twoo', 'Guest 23', 'http://eidendale.co.uk/data/avatar/meghan.png', 'Professor', 4,1);

-- For table profile
INSERT INTO view_profile(profileID, profilePicture, nickNames, age, playby, description, connections, color, fullName)
VALUES(1, 'http://eidendale.co.uk/data/profiles/felicity.png', 'Felicity, Fels, Fel', '17', 'Mary Smith', 'This is my description',
'Relationation Family.', '#FF69B4', 'Ashley Marie');

INSERT INTO view_profile(profileID, profilePicture, nickNames, age, playby, description, connections, color, fullName)
VALUES(2, 'http://eidendale.co.uk/data/profiles/felicity.png', 'Test', '42', 'Kayla Quinn', 'Description 2',
'Relationation Family Mom: Renee Quinn, Sister: Mallory Quinn.', '#008000', 'Francis Quinn');

INSERT INTO view_profile(profileID, profilePicture, nickNames, age, playby, description, connections, color, fullName)
VALUES(4, 'http://eidendale.co.uk/data/profiles/sofia.png', 'NickName', '16', 'Description', 'Description of Me',
'Relationation Family Mom: Renee Quinn, Sister: Mallory Quinn.', '#008000', 'Lindsay Renee Anderson');

-- For table: messages
INSERT INTO messages (user_id, room_id, message_body, time_sent)
VALUES (1, 1, 'Hello everybody!', '0252522');

-- For table: rooms
INSERT INTO rooms (id, room_name)
VALUES (7, 'Main Room');

INSERT INTO rooms (id, room_name)
VALUES (8, 'Gardens');

-- For table: view_robes
INSERT INTO view_robes (robeID, robeLink, color) VALUES
(2, 'http://www.eidendale.co.uk/data/robes/president.png', '#8e2f2fa');

-- For table: noticeboard
INSERT INTO noticeboard(noticeboardID, title, timeCreated, noticeboardBody, author) VALUES
(3, 'Hi its Me', '00:00:00', 'Its me, this is my noticeboard body', 'Marie');
