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
export var CreateRule200ApplicationJsonActionEnum;
(function (CreateRule200ApplicationJsonActionEnum) {
    CreateRule200ApplicationJsonActionEnum["CreateRule"] = "createRule";
})(CreateRule200ApplicationJsonActionEnum || (CreateRule200ApplicationJsonActionEnum = {}));
var CreateRule200ApplicationJsonData = /** @class */ (function (_super) {
    __extends(CreateRule200ApplicationJsonData, _super);
    function CreateRule200ApplicationJsonData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules", elemType: shared.Rule }),
        __metadata("design:type", Array)
    ], CreateRule200ApplicationJsonData.prototype, "rules", void 0);
    return CreateRule200ApplicationJsonData;
}(SpeakeasyBase));
export { CreateRule200ApplicationJsonData };
export var CreateRule200ApplicationJsonResultEnum;
(function (CreateRule200ApplicationJsonResultEnum) {
    CreateRule200ApplicationJsonResultEnum["Success"] = "success";
    CreateRule200ApplicationJsonResultEnum["Error"] = "error";
})(CreateRule200ApplicationJsonResultEnum || (CreateRule200ApplicationJsonResultEnum = {}));
var CreateRule200ApplicationJson = /** @class */ (function (_super) {
    __extends(CreateRule200ApplicationJson, _super);
    function CreateRule200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], CreateRule200ApplicationJson.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", CreateRule200ApplicationJsonData)
    ], CreateRule200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=result" }),
        __metadata("design:type", String)
    ], CreateRule200ApplicationJson.prototype, "result", void 0);
    return CreateRule200ApplicationJson;
}(SpeakeasyBase));
export { CreateRule200ApplicationJson };
var CreateRuleRequest = /** @class */ (function (_super) {
    __extends(CreateRuleRequest, _super);
    function CreateRuleRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RuleNew)
    ], CreateRuleRequest.prototype, "request", void 0);
    return CreateRuleRequest;
}(SpeakeasyBase));
export { CreateRuleRequest };
var CreateRuleResponse = /** @class */ (function (_super) {
    __extends(CreateRuleResponse, _super);
    function CreateRuleResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateRuleResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateRuleResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateRule200ApplicationJson)
    ], CreateRuleResponse.prototype, "createRule200ApplicationJsonObject", void 0);
    return CreateRuleResponse;
}(SpeakeasyBase));
export { CreateRuleResponse };
