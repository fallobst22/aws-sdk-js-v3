import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAutoMLJobRequest, CreateAutoMLJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAutoMLJobCommand,
  serializeAws_json1_1CreateAutoMLJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

export interface CreateAutoMLJobCommandInput extends CreateAutoMLJobRequest {}
export interface CreateAutoMLJobCommandOutput extends CreateAutoMLJobResponse, __MetadataBearer {}

/**
 * <p>Creates an Autopilot job.</p>
 *          <p>Find the best-performing model after you run an Autopilot job by calling .</p>
 *          <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model
 *             Development with Amazon SageMaker Autopilot</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link CreateAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 */
export class CreateAutoMLJobCommand extends $Command<
  CreateAutoMLJobCommandInput,
  CreateAutoMLJobCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateAutoMLJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateAutoMLJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAutoMLJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateAutoMLJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAutoMLJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAutoMLJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoMLJobCommandOutput> {
    return deserializeAws_json1_1CreateAutoMLJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
