"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Rectangle = /** @class */ (function () {
        function Rectangle(a, b) {
            var _this = this;
            this.area = function () {
                return _this.a * _this.b;
            };
            this.a = a;
            this.b = b;
        }
        return Rectangle;
    }());
    var Square = /** @class */ (function (_super) {
        __extends(Square, _super);
        function Square(a) {
            var _this = _super.call(this, a, a) || this;
            _this.toString = function () {
                return 'Jestem kwadratem';
            };
            return _this;
        }
        return Square;
    }(Rectangle));
    var prostokat = new Rectangle(10, 5);
    var kwadrat = new Square(8);
    console.log(prostokat.area());
    console.log(kwadrat.area());
    console.log(kwadrat.toString());
}
