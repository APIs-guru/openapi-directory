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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FlowRevisionEnumStatusEnum } from "./flowrevisionenumstatusenum";
var StudioV2FlowFlowRevision = /** @class */ (function (_super) {
    __extends(StudioV2FlowFlowRevision, _super);
    function StudioV2FlowFlowRevision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=commit_message" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "commitMessage", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], StudioV2FlowFlowRevision.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], StudioV2FlowFlowRevision.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=definition" }),
        __metadata("design:type", Object)
    ], StudioV2FlowFlowRevision.prototype, "definition", void 0);
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], StudioV2FlowFlowRevision.prototype, "errors", void 0);
    __decorate([
        Metadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "friendlyName", void 0);
    __decorate([
        Metadata({ data: "json, name=revision" }),
        __metadata("design:type", Number)
    ], StudioV2FlowFlowRevision.prototype, "revision", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "status", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], StudioV2FlowFlowRevision.prototype, "url", void 0);
    __decorate([
        Metadata({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], StudioV2FlowFlowRevision.prototype, "valid", void 0);
    return StudioV2FlowFlowRevision;
}(SpeakeasyBase));
export { StudioV2FlowFlowRevision };
