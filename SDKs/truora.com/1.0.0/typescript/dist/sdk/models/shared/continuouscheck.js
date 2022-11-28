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
import { ContinuousCheckEntry } from "./continuouscheckentry";
import { Check } from "./check";
export var ContinuousCheckContinuousCheckStatusEnum;
(function (ContinuousCheckContinuousCheckStatusEnum) {
    ContinuousCheckContinuousCheckStatusEnum["New"] = "new";
    ContinuousCheckContinuousCheckStatusEnum["Up"] = "up";
    ContinuousCheckContinuousCheckStatusEnum["Down"] = "down";
    ContinuousCheckContinuousCheckStatusEnum["Same"] = "same";
})(ContinuousCheckContinuousCheckStatusEnum || (ContinuousCheckContinuousCheckStatusEnum = {}));
// ContinuousCheck
/**
 * Continuous check allows for background checks to be performed on the same people or vehicles periodically and notifies if new information is found. Allowing companies to keep an eye on their workforce or vehicle fleet for any recent wrongdoing they might be involved in.
**/
var ContinuousCheck = /** @class */ (function (_super) {
    __extends(ContinuousCheck, _super);
    function ContinuousCheck() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContinuousCheckID" }),
        __metadata("design:type", String)
    ], ContinuousCheck.prototype, "continuousCheckId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ContinuousCheckStatus" }),
        __metadata("design:type", String)
    ], ContinuousCheck.prototype, "continuousCheckStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreationDate" }),
        __metadata("design:type", Date)
    ], ContinuousCheck.prototype, "creationDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Enabled" }),
        __metadata("design:type", Boolean)
    ], ContinuousCheck.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Frequency" }),
        __metadata("design:type", String)
    ], ContinuousCheck.prototype, "frequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=History" }),
        __metadata("design:type", ContinuousCheckEntry)
    ], ContinuousCheck.prototype, "history", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastCheckID" }),
        __metadata("design:type", String)
    ], ContinuousCheck.prototype, "lastCheckId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextRunDate" }),
        __metadata("design:type", Date)
    ], ContinuousCheck.prototype, "nextRunDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OriginalCheck" }),
        __metadata("design:type", Check)
    ], ContinuousCheck.prototype, "originalCheck", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdateDate" }),
        __metadata("design:type", Date)
    ], ContinuousCheck.prototype, "updateDate", void 0);
    return ContinuousCheck;
}(SpeakeasyBase));
export { ContinuousCheck };
