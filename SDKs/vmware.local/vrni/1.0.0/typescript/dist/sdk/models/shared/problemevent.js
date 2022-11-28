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
import { Reference } from "./reference";
import { EntityTypeEnum } from "./entitytypeenum";
export var ProblemEventAdminStateEnum;
(function (ProblemEventAdminStateEnum) {
    ProblemEventAdminStateEnum["Enabled"] = "ENABLED";
    ProblemEventAdminStateEnum["Disabled"] = "DISABLED";
})(ProblemEventAdminStateEnum || (ProblemEventAdminStateEnum = {}));
export var ProblemEventSeverityEnum;
(function (ProblemEventSeverityEnum) {
    ProblemEventSeverityEnum["Critical"] = "CRITICAL";
    ProblemEventSeverityEnum["Moderate"] = "MODERATE";
    ProblemEventSeverityEnum["Warning"] = "WARNING";
    ProblemEventSeverityEnum["Info"] = "INFO";
})(ProblemEventSeverityEnum || (ProblemEventSeverityEnum = {}));
var ProblemEvent = /** @class */ (function (_super) {
    __extends(ProblemEvent, _super);
    function ProblemEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_state" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "adminState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=anchor_entities", elemType: Reference }),
        __metadata("design:type", Array)
    ], ProblemEvent.prototype, "anchorEntities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=archived" }),
        __metadata("design:type", Boolean)
    ], ProblemEvent.prototype, "archived", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_id" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity_type" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "entityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_close_time_epoch_ms" }),
        __metadata("design:type", Number)
    ], ProblemEvent.prototype, "eventCloseTimeEpochMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_tags" }),
        __metadata("design:type", Array)
    ], ProblemEvent.prototype, "eventTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_time_epoch_ms" }),
        __metadata("design:type", Number)
    ], ProblemEvent.prototype, "eventTimeEpochMs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=related_entities", elemType: Reference }),
        __metadata("design:type", Array)
    ], ProblemEvent.prototype, "relatedEntities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=severity" }),
        __metadata("design:type", String)
    ], ProblemEvent.prototype, "severity", void 0);
    return ProblemEvent;
}(SpeakeasyBase));
export { ProblemEvent };
