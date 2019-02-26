import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import compose from 'recompose/compose';
// import tileData from './tileData';
import './ResultList.css';

const styles = theme => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
});
/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

function ResultList(props) {
	const getGridListCols = () => {
		if (isWidthUp('xl', props.width)) {
			return 4;
		}

		if (isWidthUp('md', props.width)) {
			return 3;
		}

		if (isWidthUp('sm', props.width)) {
			return 2;
		}

		return 1;
	};
	
	const { classes } = props;

	return (
		<div className={classes.root}>
			<GridList
				cellHeight={500}
				className={classes.gridList}
				cols={getGridListCols()}>
				{props.results.map(result => (
					<GridListTile key={result.image.small_url} cols={result.cols || 1}>
						<img src={result.image.small_url} alt={result.id} />
						<GridListTileBar
							title={result.name}
							subtitle={<span>Publisher: {result.publisher.name}</span>}
							actionIcon={
								<IconButton
									className={classes.icon}
									id={result.id}
									onClick={() => props.goToBio(result)}>
									<InfoIcon style={{ color: 'white' }} />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</div>
	);
}

ResultList.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default compose(
	withStyles(styles, {
		name: 'ResultList',
	}),
	withWidth()
)(ResultList);
