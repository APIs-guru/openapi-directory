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
import { Chronology } from "./chronology";
import { DateTimeFieldType } from "./datetimefieldtype";
import { DateTimeField } from "./datetimefield";
var LocalTime = /** @class */ (function (_super) {
    __extends(LocalTime, _super);
    function LocalTime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chronology" }),
        __metadata("design:type", Chronology)
    ], LocalTime.prototype, "chronology", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fieldTypes", elemType: DateTimeFieldType }),
        __metadata("design:type", Array)
    ], LocalTime.prototype, "fieldTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields", elemType: DateTimeField }),
        __metadata("design:type", Array)
    ], LocalTime.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hourOfDay" }),
        __metadata("design:type", Number)
    ], LocalTime.prototype, "hourOfDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=millisOfDay" }),
        __metadata("design:type", Number)
    ], LocalTime.prototype, "millisOfDay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=millisOfSecond" }),
        __metadata("design:type", Number)
    ], LocalTime.prototype, "millisOfSecond", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minuteOfHour" }),
        __metadata("design:type", Number)
    ], LocalTime.prototype, "minuteOfHour", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secondOfMinute" }),
        __metadata("design:type", Number)
    ], LocalTime.prototype, "secondOfMinute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=values" }),
        __metadata("design:type", Array)
    ], LocalTime.prototype, "values", void 0);
    return LocalTime;
}(SpeakeasyBase));
export { LocalTime };
