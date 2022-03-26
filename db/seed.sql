-- For table: login_info
INSERT INTO login_info (user_name, user_password, isAdmin) 
VALUES ('admin','admin', true);

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest','guest');

INSERT INTO login_info (user_name, user_password) 
VALUES ('guest2','guest2');


-- For table: users
INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title, profileID, robeID)
VALUES (1, 'Admin', 'Ashley', 'Marie', 'http://eidendale.co.uk/data/profiles/luca.png', 'Professor', 1, 1);

INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title, profileID, robeID)
VALUES (2, 'Guest', 'One', 'Guest 1', 'http://eidendale.co.uk/data/profiles/luca.png', 'Professor', 1,1);

INSERT INTO users (login_id, first_name, last_name, display_name, avatar_dirct, title, profileID, robeID)
VALUES (3, 'Guest', 'Two', 'Guest 2', 'http://eidendale.co.uk/data/profiles/luca.png', 'Professor', 1,1);

INSERT INTO pendingUsers (login_id, first_name, last_name, display_name, avatar_dirct, title, profileID, robeID)
VALUES (4, 'guest4', 'Twoo', 'Guest 23', 'http://eidendale.co.uk/data/profiles/luca.png', 'Professor', 1,1);


-- For table: messages
INSERT INTO messages (user_id, room_id, message_body, time_sent)
VALUES (1, 1, 'Hello everybody!', '0252522');

-- For table: rooms
INSERT INTO rooms (id, room_name)
VALUES (7, 'Main Room');

INSERT INTO rooms (id, room_name)
VALUES (8, 'Gardens');

INSERT INTO view_robes (robeID, robeLink, color) VALUES
(2, 'http://www.eidendale.co.uk/data/robes/president.png', '#8e2f2fa');

INSERT INTO view_avatars (avatarID, avatarLink) VALUES
(4, 'http://eidendale.co.uk/data/avatar/maggie.png');

INSERT INTO view_profilepics (profileID, profileLink) VALUES
(6, 'http://eidendale.co.uk/data/profiles/luca.png');

INSERT INTO noticeboard(noticeboardID, title, timeCreated, noticeboardBody, author) VALUES
(1, 'Hi its Me', '00:00:00', 'Its me, this is my noticeboard body', 'Marie');

