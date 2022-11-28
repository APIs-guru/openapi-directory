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
var AutopilotV1Assistant = /** @class */ (function (_super) {
    __extends(AutopilotV1Assistant, _super);
    function AutopilotV1Assistant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_events" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "callbackEvents", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=callback_url" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "callbackUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], AutopilotV1Assistant.prototype, "dateCreated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], AutopilotV1Assistant.prototype, "dateUpdated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=development_stage" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "developmentStage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latest_model_build_sid" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "latestModelBuildSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], AutopilotV1Assistant.prototype, "links", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=log_queries" }),
        __metadata("design:type", Boolean)
    ], AutopilotV1Assistant.prototype, "logQueries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=needs_model_build" }),
        __metadata("design:type", Boolean)
    ], AutopilotV1Assistant.prototype, "needsModelBuild", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=unique_name" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "uniqueName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], AutopilotV1Assistant.prototype, "url", void 0);
    return AutopilotV1Assistant;
}(SpeakeasyBase));
export { AutopilotV1Assistant };
