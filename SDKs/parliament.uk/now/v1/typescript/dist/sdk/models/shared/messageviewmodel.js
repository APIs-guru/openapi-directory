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
import * as shared from "../shared";
export var MessageViewModelAnnunciatorTypeEnum;
(function (MessageViewModelAnnunciatorTypeEnum) {
    MessageViewModelAnnunciatorTypeEnum["CommonsMain"] = "CommonsMain";
    MessageViewModelAnnunciatorTypeEnum["LordsMain"] = "LordsMain";
    MessageViewModelAnnunciatorTypeEnum["Security"] = "Security";
})(MessageViewModelAnnunciatorTypeEnum || (MessageViewModelAnnunciatorTypeEnum = {}));
var MessageViewModel = /** @class */ (function (_super) {
    __extends(MessageViewModel, _super);
    function MessageViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=annunciatorType" }),
        __metadata("design:type", String)
    ], MessageViewModel.prototype, "annunciatorType", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], MessageViewModel.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=isSecurityOverride" }),
        __metadata("design:type", Boolean)
    ], MessageViewModel.prototype, "isSecurityOverride", void 0);
    __decorate([
        Metadata({ data: "json, name=publishTime" }),
        __metadata("design:type", Date)
    ], MessageViewModel.prototype, "publishTime", void 0);
    __decorate([
        Metadata({ data: "json, name=scrollingMessages", elemType: shared.ScrollingMessageViewModel }),
        __metadata("design:type", Array)
    ], MessageViewModel.prototype, "scrollingMessages", void 0);
    __decorate([
        Metadata({ data: "json, name=showCommonsBell" }),
        __metadata("design:type", Boolean)
    ], MessageViewModel.prototype, "showCommonsBell", void 0);
    __decorate([
        Metadata({ data: "json, name=showLordsBell" }),
        __metadata("design:type", Boolean)
    ], MessageViewModel.prototype, "showLordsBell", void 0);
    __decorate([
        Metadata({ data: "json, name=slides", elemType: shared.SlideViewModel }),
        __metadata("design:type", Array)
    ], MessageViewModel.prototype, "slides", void 0);
    return MessageViewModel;
}(SpeakeasyBase));
export { MessageViewModel };
