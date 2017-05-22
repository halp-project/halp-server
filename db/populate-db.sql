\c halp;

INSERT INTO book (title, author, description, image)
  VALUES    ('Holy Bible', 'Good', 'Description: ...', 'https://s-media-cache-ak0.pinimg.com/originals/a1/69/bf/a169bf267795e9af8cfd963aab1b066f.jpg'),
            ('Treasure Island', 'Robert Louis Stevenson', 'Description: ...', 'http://res.cloudinary.com/dk-find-out/image/upload/q_80,w_640/9780141358352_TREASURE_ISLAND_CMYK_e5ejgn.jpg'),
            ('I, Robot', 'Isaac Asimov', 'Description: ...', 'https://upload.wikimedia.org/wikipedia/en/d/d5/I_robot.jpg'),
            ('The Time Machine', 'H. G. Wells', 'Description: ...', 'http://www.book-review-circle.com/images/timemachine.jpg'),
            ('Moby-Dick', 'Herman Melville', 'Description: ...', 'https://imagessl2.casadellibro.com/a/l/t0/52/9788499086552.jpg');

INSERT INTO item (name, description, image, price)
    VALUES  ('El Mundo', 'El ...', 'https://...', 2),
            ('Tabaco', 'El ...', 'https://...', 4),
            ('Marca', 'El ...', 'https://...', 1),
            ('Chupachus', 'El ...', 'https://...', 6);


INSERT INTO itemCopy (referenceNumber, idItem)
    VALUES  ('ItemRef01', 1),
            ('ItemRef02', 1),
            ('ItemRef03', 2),
            ('ItemRef04', 2),
            ('ItemRef05', 3),
            ('ItemRef06', 3),
            ('ItemRef07', 4),
            ('ItemRef08', 4);

INSERT INTO bookCopy (idBook, reserved)
  VALUES    ( 1, FALSE),
            ( 1, FALSE),
            ( 1, FALSE),
            ( 1, TRUE),
            ( 2, FALSE),
            ( 2, FALSE),
            ( 2, FALSE),
            ( 2, TRUE),
            ( 3, FALSE),
            ( 3, FALSE),
            ( 4, FALSE),
            ( 4, FALSE),
            ( 5, FALSE);

INSERT INTO patient (username, password, name, lastname, description, birthdate, room)
  VALUES    ('john01', 'passwd01', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john02', 'passwd02', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john03', 'passwd03', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john04', 'passwd04', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john05', 'passwd05', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john06', 'passwd06', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001'),
            ('john07', 'passwd07', 'John', 'Smith', 'Description: ...', '1975-04-13', 'A1001');


INSERT INTO patientOrder (orderDate, idPatient, completed)
  VALUES    ('2013-10-19 10:23:54', 'john01', TRUE),
            ('2013-10-19 10:23:54', 'john01', FALSE),
            ('2013-10-19 10:23:54', 'john01', TRUE),
            ('2013-10-19 10:23:54', 'john02', FALSE),
            ('2013-10-19 10:23:54', 'john02', TRUE),
            ('2013-10-19 10:23:54', 'john03', FALSE),
            ('2013-10-19 10:23:54', 'john04', TRUE);

INSERT INTO bookLoan (ID, referenceNumber)
  VALUES    (2, 4),
            (7, 8);

INSERT INTO purchase (ID, referenceNumber)
  VALUES    (1, 'ItemRef01'),
            (3, 'ItemRef03'),
            (4, 'ItemRef05'),
            (5, 'ItemRef07');
