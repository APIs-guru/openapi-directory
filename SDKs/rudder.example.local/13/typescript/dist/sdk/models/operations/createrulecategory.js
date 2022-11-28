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
export var CreateRuleCategory200ApplicationJsonActionEnum;
(function (CreateRuleCategory200ApplicationJsonActionEnum) {
    CreateRuleCategory200ApplicationJsonActionEnum["CreateRuleCategory"] = "CreateRuleCategory";
})(CreateRuleCategory200ApplicationJsonActionEnum || (CreateRuleCategory200ApplicationJsonActionEnum = {}));
var CreateRuleCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateRuleCategory200ApplicationJsonData, _super);
    function CreateRuleCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ruleCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], CreateRuleCategory200ApplicationJsonData.prototype, "ruleCategories", void 0);
    return CreateRuleCategory200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateRuleCategory200ApplicationJsonData };
export var CreateRuleCategory200ApplicationJsonResultEnum;
(function (CreateRuleCategory200ApplicationJsonResultEnum) {
    CreateRuleCategory200ApplicationJsonResultEnum["Success"] = "success";
    CreateRuleCategory200ApplicationJsonResultEnum["Error"] = "error";
})(CreateRuleCategory200ApplicationJsonResultEnum || (CreateRuleCategory200ApplicationJsonResultEnum = {}));
var CreateRuleCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateRuleCategory200ApplicationJson, _super);
    function CreateRuleCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateRuleCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateRuleCategory200ApplicationJsonData)
    ], CreateRuleCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateRuleCategory200ApplicationJson.prototype, "result", void 0);
    return CreateRuleCategory200ApplicationJson;
}(SpeakeasyBase));
export { CreateRuleCategory200ApplicationJson };
var CreateRuleCategoryRequest = /** @class */ (function (_super) {
    __extends(CreateRuleCategoryRequest, _super);
    function CreateRuleCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuleCategory)
    ], CreateRuleCategoryRequest.prototype, "request", void 0);
    return CreateRuleCategoryRequest;
}(SpeakeasyBase));
export { CreateRuleCategoryRequest };
var CreateRuleCategoryResponse = /** @class */ (function (_super) {
    __extends(CreateRuleCategoryResponse, _super);
    function CreateRuleCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRuleCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRuleCategory200ApplicationJson)
    ], CreateRuleCategoryResponse.prototype, "createRuleCategory200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRuleCategoryResponse.prototype, "statusCode", void 0);
    return CreateRuleCategoryResponse;
}(SpeakeasyBase));
export { CreateRuleCategoryResponse };
