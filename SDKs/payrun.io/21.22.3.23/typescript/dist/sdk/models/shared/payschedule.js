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
export var PaySchedulePaySchedulePayFrequencyEnum;
(function (PaySchedulePaySchedulePayFrequencyEnum) {
    PaySchedulePaySchedulePayFrequencyEnum["Weekly"] = "Weekly";
    PaySchedulePaySchedulePayFrequencyEnum["Monthly"] = "Monthly";
    PaySchedulePaySchedulePayFrequencyEnum["TwoWeekly"] = "TwoWeekly";
    PaySchedulePaySchedulePayFrequencyEnum["FourWeekly"] = "FourWeekly";
    PaySchedulePaySchedulePayFrequencyEnum["Yearly"] = "Yearly";
})(PaySchedulePaySchedulePayFrequencyEnum || (PaySchedulePaySchedulePayFrequencyEnum = {}));
var PaySchedulePaySchedule = /** @class */ (function (_super) {
    __extends(PaySchedulePaySchedule, _super);
    function PaySchedulePaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MetaData" }),
        __metadata("design:type", Map)
    ], PaySchedulePaySchedule.prototype, "metaData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], PaySchedulePaySchedule.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PayFrequency" }),
        __metadata("design:type", String)
    ], PaySchedulePaySchedule.prototype, "payFrequency", void 0);
    return PaySchedulePaySchedule;
}(SpeakeasyBase));
export { PaySchedulePaySchedule };
var PaySchedule = /** @class */ (function (_super) {
    __extends(PaySchedule, _super);
    function PaySchedule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PaySchedule" }),
        __metadata("design:type", PaySchedulePaySchedule)
    ], PaySchedule.prototype, "paySchedule", void 0);
    return PaySchedule;
}(SpeakeasyBase));
export { PaySchedule };
