import { getLogger } from "../src/index"

const logger = getLogger("test")


logger.debug("Hello, world!")
logger.information("Hello, world!")
logger.success("Hello, world!")
logger.warning("Hello, world!")
logger.error("Hello, world!")
logger.critical("Hello, world!")
logger.fatal("Hello, world!")