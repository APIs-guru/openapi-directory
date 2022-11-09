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
var StudioV2FlowExecutionExecutionStep = /** @class */ (function (_super) {
    __extends(StudioV2FlowExecutionExecutionStep, _super);
    function StudioV2FlowExecutionExecutionStep() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=context" }),
        __metadata("design:type", Object)
    ], StudioV2FlowExecutionExecutionStep.prototype, "context", void 0);
    __decorate([
        Metadata({ data: "json, name=date_created" }),
        __metadata("design:type", Date)
    ], StudioV2FlowExecutionExecutionStep.prototype, "dateCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=date_updated" }),
        __metadata("design:type", Date)
    ], StudioV2FlowExecutionExecutionStep.prototype, "dateUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=execution_sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "executionSid", void 0);
    __decorate([
        Metadata({ data: "json, name=flow_sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "flowSid", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], StudioV2FlowExecutionExecutionStep.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=transitioned_from" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "transitionedFrom", void 0);
    __decorate([
        Metadata({ data: "json, name=transitioned_to" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "transitionedTo", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], StudioV2FlowExecutionExecutionStep.prototype, "url", void 0);
    return StudioV2FlowExecutionExecutionStep;
}(SpeakeasyBase));
export { StudioV2FlowExecutionExecutionStep };
