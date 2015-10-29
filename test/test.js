(function () {
  'use strict';

  describe('Test game.js', function () {
    before(function() {
		start = false;
		map_width = 641;  //地图大概大小
		row = 3;
		len = map_width / row;
		pr = 0.5;
		cnt = 0;
		autoflag = false;
		ftp = 10;
		mainCycle;   //主循环变量
		mapCanvas = document.getElementById('mapCanvas');
    });
    describe('Test initdata', function () {
      it('value should be right', function () {
        initdata();
        assert.equal(len, 214);
        assert.equal(map_width, 642);
      });
    });
    describe('Test initdata', function () {
	  before(function() {
		map_width = 640;  //地图大概大小
		row = 5;
      });
      it('value should be right', function () {
        initdata();
        assert.equal(len, 128);
        assert.equal(map_width, 640);
        assert.equal(cnt, 0);
      });
    });
	
    describe('Test init_map', function () {
      it('map should be right', function () {
        init_map(len);	
		for(var i = 0; i < len; i++){
			for(var j = 0; j < len; j++){
				if(map[i][j] != 0){
					assert.equal(map[i][j], 1);
				}
				else{
					assert.equal(map[i][j], 0);
				}
			}
		}
      });
    });
	
    describe('Test nextgeneration', function () {
	  before(function() {
			map = [	[0, 1, 0, 1, 0],
					[1, -1, 1, 1, 1],
					[0, 0, 1, 1, 0],
					[1, 0, -1, 0, 1],
					[0, 1, 1, 0, 1]];
			cnt = 0;
	  });
      it('logic & cnt should be right', function () {
		get_next_generation();
		assert.equal(map[0][0], 0);
		assert.equal(map[0][1], 0);
		assert.equal(map[0][2], 0);
		assert.equal(map[0][3], 1);
		assert.equal(map[0][4], 0);
		assert.equal(map[1][0], 1);
		assert.equal(map[1][1], -1);
		assert.equal(map[1][2], 0);
		assert.equal(map[1][3], 0);
		assert.equal(map[1][4], 1);
		assert.equal(map[2][0], 1);
		assert.equal(map[2][1], 0);
		assert.equal(map[2][2], 1);
		assert.equal(map[2][3], 1);
		assert.equal(map[2][4], 0);
		assert.equal(map[3][0], 0);
		assert.equal(map[3][1], 0);
		assert.equal(map[3][2], -1);
		assert.equal(map[3][3], 1);
		assert.equal(map[3][4], 1);
		assert.equal(map[4][0], 1);
		assert.equal(map[4][1], 0);
		assert.equal(map[4][2], 1);
		assert.equal(map[4][3], 0);
		assert.equal(map[4][4], 1);
		assert.equal(cnt, 1);
		get_next_generation();
		assert.equal(map[0][0], 0);
		assert.equal(map[0][1], 0);
		assert.equal(map[0][2], 0);
		assert.equal(map[0][3], 0);
		assert.equal(map[0][4], 0);
		assert.equal(map[1][0], 0);
		assert.equal(map[1][1], -1);
		assert.equal(map[1][2], 1);
		assert.equal(map[1][3], 0);
		assert.equal(map[1][4], 0);
		assert.equal(map[2][0], 1);
		assert.equal(map[2][1], 1);
		assert.equal(map[2][2], 1);
		assert.equal(map[2][3], 1);
		assert.equal(map[2][4], 0);
		assert.equal(map[3][0], 1);
		assert.equal(map[3][1], 0);
		assert.equal(map[3][2], -1);
		assert.equal(map[3][3], 1);
		assert.equal(map[3][4], 1);
		assert.equal(map[4][0], 1);
		assert.equal(map[4][1], 0);
		assert.equal(map[4][2], 1);
		assert.equal(map[4][3], 0);
		assert.equal(map[4][4], 1);
		assert.equal(cnt, 2);
      });
    });
	
	describe('Test nextgeneration', function () {
	  before(function() {
			map = [	[0, 0, 0, 0, 0],
					[0, -1, 0, 0, 0],
					[0, 0, 0, 0, 0],
					[0, 0, -1, 0, 0],
					[0, 0, 0, 0, 0]];
			cnt = 0;
	  });
      it('listen map should be right', function () {
		get_next_generation();
		assert.equal(map[0][0], 0);
		assert.equal(map[0][1], 0);
		assert.equal(map[0][2], 0);
		assert.equal(map[0][3], 0);
		assert.equal(map[0][4], 0);
		assert.equal(map[1][0], 0);
		assert.equal(map[1][1], -1);
		assert.equal(map[1][2], 0);
		assert.equal(map[1][3], 0);
		assert.equal(map[1][4], 0);
		assert.equal(map[2][0], 0);
		assert.equal(map[2][1], 0);
		assert.equal(map[2][2], 0);
		assert.equal(map[2][3], 0);
		assert.equal(map[2][4], 0);
		assert.equal(map[3][0], 0);
		assert.equal(map[3][1], 0);
		assert.equal(map[3][2], -1);
		assert.equal(map[3][3], 0);
		assert.equal(map[3][4], 0);
		assert.equal(map[4][0], 0);
		assert.equal(map[4][1], 0);
		assert.equal(map[4][2], 0);
		assert.equal(map[4][3], 0);
		assert.equal(map[4][4], 0);
      });
    });
	
  });
})();
