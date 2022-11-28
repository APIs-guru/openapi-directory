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
var CampaignRequestFilters = /** @class */ (function (_super) {
    __extends(CampaignRequestFilters, _super);
    function CampaignRequestFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Array)
    ], CampaignRequestFilters.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contacts" }),
        __metadata("design:type", Array)
    ], CampaignRequestFilters.prototype, "contacts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], CampaignRequestFilters.prototype, "tags", void 0);
    return CampaignRequestFilters;
}(SpeakeasyBase));
export { CampaignRequestFilters };
export var CampaignRequestTriggerCodeEnum;
(function (CampaignRequestTriggerCodeEnum) {
    CampaignRequestTriggerCodeEnum["M"] = "M";
    CampaignRequestTriggerCodeEnum["S"] = "S";
    CampaignRequestTriggerCodeEnum["Fu"] = "FU";
})(CampaignRequestTriggerCodeEnum || (CampaignRequestTriggerCodeEnum = {}));
var CampaignRequestTrigger = /** @class */ (function (_super) {
    __extends(CampaignRequestTrigger, _super);
    function CampaignRequestTrigger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], CampaignRequestTrigger.prototype, "code", void 0);
    return CampaignRequestTrigger;
}(SpeakeasyBase));
export { CampaignRequestTrigger };
var CampaignRequest = /** @class */ (function (_super) {
    __extends(CampaignRequest, _super);
    function CampaignRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filters" }),
        __metadata("design:type", CampaignRequestFilters)
    ], CampaignRequest.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=template" }),
        __metadata("design:type", String)
    ], CampaignRequest.prototype, "template", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trigger" }),
        __metadata("design:type", CampaignRequestTrigger)
    ], CampaignRequest.prototype, "trigger", void 0);
    return CampaignRequest;
}(SpeakeasyBase));
export { CampaignRequest };
