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
var DeleteRulePathParams = /** @class */ (function (_super) {
    __extends(DeleteRulePathParams, _super);
    function DeleteRulePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ruleId" }),
        __metadata("design:type", String)
    ], DeleteRulePathParams.prototype, "ruleId", void 0);
    return DeleteRulePathParams;
}(SpeakeasyBase));
export { DeleteRulePathParams };
export var DeleteRule200ApplicationJsonActionEnum;
(function (DeleteRule200ApplicationJsonActionEnum) {
    DeleteRule200ApplicationJsonActionEnum["DeleteRule"] = "deleteRule";
})(DeleteRule200ApplicationJsonActionEnum || (DeleteRule200ApplicationJsonActionEnum = {}));
var DeleteRule200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(DeleteRule200ApplicationJsonData, _super);
    function DeleteRule200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule }),
        __metadata("design:type", Array)
    ], DeleteRule200ApplicationJsonData.prototype, "rules", void 0);
    return DeleteRule200ApplicationJsonData;
}(SpeakeasyBase));
export { DeleteRule200ApplicationJsonData };
export var DeleteRule200ApplicationJsonResultEnum;
(function (DeleteRule200ApplicationJsonResultEnum) {
    DeleteRule200ApplicationJsonResultEnum["Success"] = "success";
    DeleteRule200ApplicationJsonResultEnum["Error"] = "error";
})(DeleteRule200ApplicationJsonResultEnum || (DeleteRule200ApplicationJsonResultEnum = {}));
var DeleteRule200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteRule200ApplicationJson, _super);
    function DeleteRule200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], DeleteRule200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", DeleteRule200ApplicationJsonData)
    ], DeleteRule200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], DeleteRule200ApplicationJson.prototype, "result", void 0);
    return DeleteRule200ApplicationJson;
}(SpeakeasyBase));
export { DeleteRule200ApplicationJson };
var DeleteRuleRequest = /** @class */ (function (_super) {
    __extends(DeleteRuleRequest, _super);
    function DeleteRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRulePathParams)
    ], DeleteRuleRequest.prototype, "pathParams", void 0);
    return DeleteRuleRequest;
}(SpeakeasyBase));
export { DeleteRuleRequest };
var DeleteRuleResponse = /** @class */ (function (_super) {
    __extends(DeleteRuleResponse, _super);
    function DeleteRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteRule200ApplicationJson)
    ], DeleteRuleResponse.prototype, "deleteRule200ApplicationJsonObject", void 0);
    return DeleteRuleResponse;
}(SpeakeasyBase));
export { DeleteRuleResponse };
