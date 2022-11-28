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
var DeleteRuleCategoryPathParams = /** @class */ (function (_super) {
    __extends(DeleteRuleCategoryPathParams, _super);
    function DeleteRuleCategoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleCategoryId" }),
        __metadata("design:type", String)
    ], DeleteRuleCategoryPathParams.prototype, "ruleCategoryId", void 0);
    return DeleteRuleCategoryPathParams;
}(SpeakeasyBase));
export { DeleteRuleCategoryPathParams };
export var DeleteRuleCategory200ApplicationJsonActionEnum;
(function (DeleteRuleCategory200ApplicationJsonActionEnum) {
    DeleteRuleCategory200ApplicationJsonActionEnum["DeleteRuleCategory"] = "DeleteRuleCategory";
})(DeleteRuleCategory200ApplicationJsonActionEnum || (DeleteRuleCategory200ApplicationJsonActionEnum = {}));
var DeleteRuleCategory200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteRuleCategory200ApplicationJsonData, _super);
    function DeleteRuleCategory200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groupCategories", elemType: shared.RuleCategory }),
        __metadata("design:type", Array)
    ], DeleteRuleCategory200ApplicationJsonData.prototype, "groupCategories", void 0);
    return DeleteRuleCategory200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteRuleCategory200ApplicationJsonData };
export var DeleteRuleCategory200ApplicationJsonResultEnum;
(function (DeleteRuleCategory200ApplicationJsonResultEnum) {
    DeleteRuleCategory200ApplicationJsonResultEnum["Success"] = "success";
    DeleteRuleCategory200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteRuleCategory200ApplicationJsonResultEnum || (DeleteRuleCategory200ApplicationJsonResultEnum = {}));
var DeleteRuleCategory200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteRuleCategory200ApplicationJson, _super);
    function DeleteRuleCategory200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteRuleCategory200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteRuleCategory200ApplicationJsonData)
    ], DeleteRuleCategory200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteRuleCategory200ApplicationJson.prototype, "result", void 0);
    return DeleteRuleCategory200ApplicationJson;
}(SpeakeasyBase));
export { DeleteRuleCategory200ApplicationJson };
var DeleteRuleCategoryRequest = /** @class */ (function (_super) {
    __extends(DeleteRuleCategoryRequest, _super);
    function DeleteRuleCategoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRuleCategoryPathParams)
    ], DeleteRuleCategoryRequest.prototype, "pathParams", void 0);
    return DeleteRuleCategoryRequest;
}(SpeakeasyBase));
export { DeleteRuleCategoryRequest };
var DeleteRuleCategoryResponse = /** @class */ (function (_super) {
    __extends(DeleteRuleCategoryResponse, _super);
    function DeleteRuleCategoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRuleCategoryResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRuleCategory200ApplicationJson)
    ], DeleteRuleCategoryResponse.prototype, "deleteRuleCategory200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRuleCategoryResponse.prototype, "statusCode", void 0);
    return DeleteRuleCategoryResponse;
}(SpeakeasyBase));
export { DeleteRuleCategoryResponse };
