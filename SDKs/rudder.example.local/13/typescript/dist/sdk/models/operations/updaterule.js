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
import * as shared from "../shared";
var UpdateRulePathParams = /** @class */ (function (_super) {
    __extends(UpdateRulePathParams, _super);
    function UpdateRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], UpdateRulePathParams.prototype, "ruleId", void 0);
    return UpdateRulePathParams;
}(SpeakeasyBase));
export { UpdateRulePathParams };
export var UpdateRule200ApplicationJsonActionEnum;
(function (UpdateRule200ApplicationJsonActionEnum) {
    UpdateRule200ApplicationJsonActionEnum["UpdateRule"] = "updateRule";
})(UpdateRule200ApplicationJsonActionEnum || (UpdateRule200ApplicationJsonActionEnum = {}));
var UpdateRule200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(UpdateRule200ApplicationJsonData, _super);
    function UpdateRule200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.RuleWithCategory }),
        __metadata("design:type", Array)
    ], UpdateRule200ApplicationJsonData.prototype, "rules", void 0);
    return UpdateRule200ApplicationJsonData;
}(SpeakeasyBase));
export { UpdateRule200ApplicationJsonData };
export var UpdateRule200ApplicationJsonResultEnum;
(function (UpdateRule200ApplicationJsonResultEnum) {
    UpdateRule200ApplicationJsonResultEnum["Success"] = "success";
    UpdateRule200ApplicationJsonResultEnum["Error"] = "error";
})(UpdateRule200ApplicationJsonResultEnum || (UpdateRule200ApplicationJsonResultEnum = {}));
var UpdateRule200ApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateRule200ApplicationJson, _super);
    function UpdateRule200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], UpdateRule200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", UpdateRule200ApplicationJsonData)
    ], UpdateRule200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], UpdateRule200ApplicationJson.prototype, "result", void 0);
    return UpdateRule200ApplicationJson;
}(SpeakeasyBase));
export { UpdateRule200ApplicationJson };
var UpdateRuleRequest = /** @class */ (function (_super) {
    __extends(UpdateRuleRequest, _super);
    function UpdateRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRulePathParams)
    ], UpdateRuleRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuleWithCategory)
    ], UpdateRuleRequest.prototype, "request", void 0);
    return UpdateRuleRequest;
}(SpeakeasyBase));
export { UpdateRuleRequest };
var UpdateRuleResponse = /** @class */ (function (_super) {
    __extends(UpdateRuleResponse, _super);
    function UpdateRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateRule200ApplicationJson)
    ], UpdateRuleResponse.prototype, "updateRule200ApplicationJsonObject", void 0);
    return UpdateRuleResponse;
}(SpeakeasyBase));
export { UpdateRuleResponse };
