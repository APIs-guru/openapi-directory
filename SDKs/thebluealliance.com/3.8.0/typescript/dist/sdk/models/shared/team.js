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
var Team = /** @class */ (function (_super) {
    __extends(Team, _super);
    function Team() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], Team.prototype, "address", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=city" }),
        __metadata("design:type", String)
    ], Team.prototype, "city", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], Team.prototype, "country", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmaps_place_id" }),
        __metadata("design:type", String)
    ], Team.prototype, "gmapsPlaceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gmaps_url" }),
        __metadata("design:type", String)
    ], Team.prototype, "gmapsUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=home_championship" }),
        __metadata("design:type", Map)
    ], Team.prototype, "homeChampionship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=key" }),
        __metadata("design:type", String)
    ], Team.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lat" }),
        __metadata("design:type", Number)
    ], Team.prototype, "lat", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lng" }),
        __metadata("design:type", Number)
    ], Team.prototype, "lng", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location_name" }),
        __metadata("design:type", String)
    ], Team.prototype, "locationName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=motto" }),
        __metadata("design:type", String)
    ], Team.prototype, "motto", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Team.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nickname" }),
        __metadata("design:type", String)
    ], Team.prototype, "nickname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=postal_code" }),
        __metadata("design:type", String)
    ], Team.prototype, "postalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rookie_year" }),
        __metadata("design:type", Number)
    ], Team.prototype, "rookieYear", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=school_name" }),
        __metadata("design:type", String)
    ], Team.prototype, "schoolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state_prov" }),
        __metadata("design:type", String)
    ], Team.prototype, "stateProv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=team_number" }),
        __metadata("design:type", Number)
    ], Team.prototype, "teamNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=website" }),
        __metadata("design:type", String)
    ], Team.prototype, "website", void 0);
    return Team;
}(SpeakeasyBase));
export { Team };
