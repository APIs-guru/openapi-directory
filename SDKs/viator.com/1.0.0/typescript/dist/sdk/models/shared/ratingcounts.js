var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
// RatingCounts
/**
 * **dictionary** of rating (stars) to number of reviews with each rating for *this* product"
 *
 * users rate products by assigning a star-rating from 1-5; these values show the total number of reviews for each of the star ratings (up to a maximum given in the `reviewCount` field in this response)
 *
 * - **note**: see response sample for structure
 *
**/
var RatingCounts = /** @class */ (function (_super) {
    __extends(RatingCounts, _super);
    function RatingCounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=1" }),
        __metadata("design:type", Number)
    ], RatingCounts.prototype, "one", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=2" }),
        __metadata("design:type", Number)
    ], RatingCounts.prototype, "two", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=3" }),
        __metadata("design:type", Number)
    ], RatingCounts.prototype, "three", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=4" }),
        __metadata("design:type", Number)
    ], RatingCounts.prototype, "four", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=5" }),
        __metadata("design:type", Number)
    ], RatingCounts.prototype, "five", void 0);
    return RatingCounts;
}(SpeakeasyBase));
export { RatingCounts };
